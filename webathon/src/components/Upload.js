import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [questionsSubmitted, setQuestionsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Please login first.');
      // Optionally, redirect the user to the login page
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('http://localhost:5000/uploadques', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Questions file sent successfully');
      alert("Questions file submitted successfully");
      setQuestionsSubmitted(true);
    } else {
      console.error('Failed to send questions file');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit1 = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile1);

    const response = await fetch('http://localhost:5000/uploadans', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Answers file sent successfully');
      alert("Answers file submitted successfully");
    } else {
      console.error('Failed to send answers file');
    }
  };

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const handleTakeTest = () => {
    if (!questionsSubmitted) {
      alert("Questions file not submitted. Please choose a file first.");
      return;
    }
    navigate('/Test')
  };

  if (!isLoggedIn) {
    return <div>Please login first.</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
          <h2>Select Questions File:</h2>
          <input type="file" accept=".pdf" onChange={handleFileChange} style={{ margin: '10px 0' }} />
          <button onClick={handleSubmit} style={{ padding: '6px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Questions</button>

          <h2>Select Answers File:</h2>
          <input type="file" accept=".pdf" onChange={handleFileChange1} style={{ margin: '10px 0' }} />
          <button onClick={handleSubmit1} style={{ padding: '6px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Answers</button>
        </div>
        <button onClick={handleTakeTest} style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Attempt Test</button>
      </div>
    </div>
  );
}

export default Upload;
