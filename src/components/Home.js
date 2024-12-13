
import React from 'react';
import AppLayout from './AppLayout';
import FileInput from './FileInput'; // Import the FileInput component
import Panel from './Panel'; // Import the Panel component

const HomePage = () => {
  // State or logic specific to the HomePage component can be added here

  return (
    <AppLayout>
      <FileInput /> {/* Render the FileInput component */}
      <Panel /> {/* Render the Panel component */}
    </AppLayout>
  );
};

export default HomePage;
