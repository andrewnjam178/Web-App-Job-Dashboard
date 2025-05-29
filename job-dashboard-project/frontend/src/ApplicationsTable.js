import React, { useEffect, useState } from 'react';
import axios from 'axios';

// This component fetches job application data from the backend and displays it in a table format.
// It uses the use Effect hok to make an API call to the backend when the component mounts.
const ApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  // useEffect is used to fetch data from the backend when the component mounts.
  useEffect(() => {
    // Make a GET request to the backend API to fetch job applications data.
    axios.get('http://localhost:5000/api/applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // The component returns a table that displays the job applications data.
  // The table includes columns for Company, Role, Industry, Level, Outcome, and Date Applied.
  return (
    <div>
      <h2>Job Applications</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Industry</th>
            <th>Level</th>
            <th>Outcome</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.Company}</td>
              <td>{app["Role/Position"]}</td>
              <td>{app.Industry}</td>
              <td>{app.Level}</td>
              <td>{app.Outcome}</td>
              <td>{app["Date Applied"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;