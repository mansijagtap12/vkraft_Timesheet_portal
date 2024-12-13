import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Panel from './Panel';
// import './index.css'; // Assuming you have a CSS file for styling

const FileInput = ({ onFileSelect, onPreviewClick, onReset, username }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [previewed, setPreviewed] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      onFileSelect(selectedFile);
      setPreviewed(false);
      setFileUrl(URL.createObjectURL(selectedFile)); // Create URL for file preview
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setFileName(droppedFile.name);
      onFileSelect(droppedFile);
      setPreviewed(false);
      setFileUrl(URL.createObjectURL(droppedFile)); // Create URL for file preview
    }
  };

  const handlePreviewClick = () => {
    setPreviewed(true);
    onPreviewClick();
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setPreviewed(false);
    setFileUrl(''); // Clear file URL
    onReset();
    navigate('/home');
  };

  return (
    <AppLayout username={username}>
      <div className="file-input-container" onDragOver={handleDragOver} onDrop={handleDrop}>
        <input type="file" id="fileInput" className="file-input" onChange={handleFileChange} accept="application/pdf" />
        <label htmlFor="fileInput" className="file-input-label">Upload Pdf file</label>
        <span className="file-name">{fileName ? fileName : 'No File Selected'}</span>
        {file && (
          <>
            <button className="preview-button" onClick={handlePreviewClick} aria-label="Preview PDF">
              Preview
            </button>
            <button className="reset-button" onClick={handleReset} aria-label="Reset">
              Reset
            </button>
          </>
        )}
      </div>
      {previewed && <Panel file={file} />}
    </AppLayout>
  );
};

export default FileInput;
