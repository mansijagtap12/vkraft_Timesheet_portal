import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FileInput from './components/FileInput';
import Login from './components/Login';
import MainPage from './components/MainPage'; // Import MainPage component
import EmployeeList from './components/EmployeeList';
import './index.css';
import ExtractMessage from './components/ExtractMessage';
import './components/MainPage.css';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPanels, setShowPanels] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [username, setUsername] = useState(''); // State to store the username

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handlePreviewClick = () => {
    setShowPanels(true);
  };

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username); // Store the username in state
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(''); // Clear the username on logout
  };

  const handleReset = () => {
    setSelectedFile(null);
    setShowPanels(false);
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/main"
          element={
            isAuthenticated ? <MainPage username={username} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <>
                <FileInput 
                  username={username}
                  key={resetKey}
                  onFileSelect={handleFileSelect}
                  onPreviewClick={handlePreviewClick}
                  onReset={handleReset}
                />
              </>
            ) : (
              <Navigate to="/main" />
            )
          }
        />
        <Route
          path="/EmployeeList"
          element={<EmployeeList  username={username}/>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/submitted"
          element={<ExtractMessage />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
