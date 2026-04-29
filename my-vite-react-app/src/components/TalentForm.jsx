import "./TalentForm.css";
import React, { useState } from "react";


const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        talent: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.talent || formData.talent === "disabled") {
            alert("Please select talent before Submitting!");
            return;
        }

        console.log("Form Data Submitted: ", formData);

        setFormData({
            name: "",
            age: "",
            email: "",
            talent: "" 
        });
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>Talent Form for PUPBC</h1> {/* Changed H1 to h1 */}
                <p>Fill out the details below if you are interested</p>
                <form onSubmit={handleSubmit}>

                    {/* name */}
                    <div className="form-field"> 
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div> 

                    {/* Age */}
                    <div className="form-field">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Talent Input Field */}
                    <div className="form-field">
                        <label htmlFor="talent">Talent</label> 
                        <select
                            id="talent"
                            name="talent"
                            value={formData.talent}
                            onChange={handleChange} 
                            required
                        >
                            <option value="disabled">
                                select your talent
                            </option>
                            <option value="Singing">Singing</option>
                            <option value="Dancing">Dancing</option>
                            <option value="Poetry">Poetry</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="Submit-btn">
                        Submit 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TalentForm;