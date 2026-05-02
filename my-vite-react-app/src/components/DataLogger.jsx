import { useState } from 'react';
import axios from 'axios';
import './ResearchLogger.css'; 

function DataLogger() {
  const [formData, setFormData] = useState({
    location: '',
    waterDepth: 0,
    soilConsistency: 'Medium',
    snailDensity: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to your Azure backend
     const response = await axios.post('[https://kuhologger.azurewebsites.net/submit](https://kuhologger.azurewebsites.net/submit)', formData);
      
      if (response.status === 201 || response.status === 200) {
        console.log("API Response:", response.data);
        alert("Field Research Data Logged Successfully!");

        // RESET THE FORM: Using your actual research fields instead of talent fields
        setFormData({
          location: '',
          waterDepth: 0,
          soilConsistency: 'Medium',
          snailDensity: 0
        });
        
        // Optional: clear the actual input elements if not using value={formData...}
        e.target.reset();
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="logger-container">
      <div className="logger-card">
        <h2>FIELD RESEARCH LOGGER</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Plot Location</label>
            <input 
              type="text" 
              value={formData.location} // Added controlled input
              required 
              placeholder="e.g., Barangay Zapote Plot A"
              onChange={(e) => setFormData({...formData, location: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label>Water Depth (cm)</label>
            <input 
              type="number" 
              value={formData.waterDepth}
              required 
              onChange={(e) => setFormData({...formData, waterDepth: parseFloat(e.target.value) || 0})} 
            />
          </div>

          <div className="input-group">
            <label>Soil Consistency</label>
            <select 
              value={formData.soilConsistency}
              onChange={(e) => setFormData({...formData, soilConsistency: e.target.value})}
            >
              <option value="Soft">Soft</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="input-group">
            <label>Snail Density (count/sqm)</label>
            <input 
              type="number" 
              value={formData.snailDensity}
              required 
              onChange={(e) => setFormData({...formData, snailDensity: parseInt(e.target.value) || 0})} 
            />
          </div>

          <button type="submit" className="submit-btn">Log Data</button>
        </form>
      </div>
    </div>
  );
}

export default DataLogger;