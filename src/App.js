import React, { useState, useEffect } from "react";
import ProgressBar from "./progress-bar.component";
// import { useNavigate } from 'react-router-dom';

function App() {
  const [completed, setCompleted] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prevCompleted) => {
        const newCompleted = prevCompleted + Math.random()*10; // Increment progress by 10%
        if (newCompleted >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          // navigate('/completed'); // Redirect to CompletedPage
        }
        return newCompleted;
      });
    }, Math.random() * 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container">
      <h1>% Detecting in progress %</h1>
      <div className="PS">
        <ProgressBar bgcolor={"#16ff16"} completed={completed} />
      </div>
      {completed >= 90 && (
        <div className="completion-message">
          <p>Detection completed successfully!</p>
          {/* You can add additional content or UI elements here */}
          <p>Error!</p>
        </div>
      )}
    </div>
  );
}

export default App;
