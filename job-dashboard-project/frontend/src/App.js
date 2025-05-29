import React from 'react';
import ApplicationsTable from './ApplicationsTable';

// This is the main App component that serves as the entry point for the React application.
// It imports the ApplicationsTable component and renders it within a div.
function App() {
  return (
    <div className="App">
      <h1>Job Dashboard</h1>
      <ApplicationsTable />
    </div>
  );
}

export default App;