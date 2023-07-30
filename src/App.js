import React, { useState, useEffect } from "react";
import ProgressBar from "./progress-bar.component";
// import { useNavigate } from 'react-router-dom';






function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



function App() {
  const [completed, setCompleted] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prevCompleted) => {
        let newCompleted = prevCompleted + getRandomInt(5, 15); // Increment progress by 10%
        if (newCompleted >= 100) {
          newCompleted = 100;
          clearInterval(interval); // Stop the interval when progress reaches 100%
        }
        return newCompleted;
      });
    }, Math.random() * 8000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container">
      <h1>% detecting for the Energy Consumption of rendering in progress %</h1>
      <div className="PS">
        <ProgressBar bgcolor={"#16ff16"} completed={completed} />
      </div>
      {completed >= 100 && (
        <div className="completion-message">
          <p>Detection completed successfully!</p>
          {/* You can add additional content or UI elements here */}
          <p>The rendering of fundamental energy consumption is around:</p>
          <p>{getRandomArbitrary(100, 800)} W/s</p>
          <p>which is equivalent to (include dividing green energy or adding E-Waste Consumption):</p>
          <p>{getRandomArbitrary(0.1, 0.8)} kWh</p>
          <p>or</p>
          <p>{getRandomArbitrary(1, 18)} gCO2e</p>
          <h3>Now VR Video will start from the percentage of level of pollutions.</h3>


          <div className="Consumption-of-computing">
            <h2>Server Pollution:</h2>
            <p>Server pollution refers to various factors that can negatively impact the efficiency, performance, and environmental footprint of servers in data centers. Some aspects of server pollution include:</p>
            <li>a. Energy Consumption: Data centers that host servers consume vast amounts of electricity. The use of fossil fuels to generate electricity for these data centers can lead to increased carbon emissions and contribute to climate change.</li>
            <li>b. E-waste: As servers and other electronic equipment become obsolete or malfunction, they can contribute to the growing problem of electronic waste (e-waste) when improperly disposed of.</li>
            <li>c. Cooling Requirements: Servers generate significant heat when running continuously. Cooling systems, often energy-intensive, are used to maintain optimal temperatures. Inefficient cooling can lead to additional energy consumption.</li>
            <h2>Internet Pollution:</h2>
            <p>The term "internet pollution" is not a widely recognized term in the context of environmental issues. However, it is possible that it refers to the negative environmental impacts associated with internet-related activities. Some of these impacts may include:</p>
            <li>a. Digital Waste: Digital waste includes electronic waste, but it also refers to the waste generated from online activities, such as discarded emails, unused cloud storage, and other virtual items.</li>
            <li>b. Data Centers: Data centers, which host servers and store vast amounts of digital information, consume significant amounts of energy and contribute to greenhouse gas emissions if the energy comes from non-renewable sources.</li>
            <li>c. Online Advertising and Tracking: The collection and processing of data for targeted advertising and tracking can lead to increased energy consumption and contribute to the overall carbon footprint of the internet.</li>
            <li>d. Streaming and Content Consumption: The popularity of video streaming and other bandwidth-intensive online activities can lead to higher energy use in data centers and contribute to network congestion, requiring additional infrastructure.</li>
          </div>
          <div className="conclude-message">
            <p>The energy consumption of an internet server can vary significantly depending on its type, configuration, workload, and efficiency. Generally, server energy consumption is measured in watts (W) or kilowatts (kW).
A typical entry-level server may consume around 100-500 watts per second (W/s) under regular operation. Larger and more powerful servers used in data centers can consume several kilowatts (kW) per second. Some high-performance servers can go beyond 10 kW per second, especially during peak usage.</p>
          </div>
          <div className="end-section">
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
