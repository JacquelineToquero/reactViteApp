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
      // POINT TO AZURE: Replace localhost with your actual Azure URL
      const response = await axios.post('https://data-logger-api.azurewebsites.net/submit', formData);
      console.log(response.data);
      alert("Field Research Data Logged Successfully!");
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error logging data. Check console.");
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
              required 
              placeholder="e.g., Barangay Zapote Plot A"
              onChange={(e) => setFormData({...formData, location: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label>Water Depth (cm)</label>
            <input 
              type="number" 
              required 
              onChange={(e) => setFormData({...formData, waterDepth: parseFloat(e.target.value)})} 
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
              required 
              onChange={(e) => setFormData({...formData, snailDensity: parseInt(e.target.value)})} 
            />
          </div>

          <button type="submit" className="submit-btn">Log Data</button>
        </form>
      </div>
    </div>
  );
}

export default DataLogger;