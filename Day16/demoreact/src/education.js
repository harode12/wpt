

import React, { useState } from 'react';

// Graduate Component
const GraduateComponent = ({ formData, setFormData }) => (
  <div>
    <label>Degree: <input type="text" value={formData.degree || ''} 
    onChange={(e) => setFormData({ ...formData, degree: e.target.value })} /></label><br />
    <label>Year: <input type="text" value={formData.year || ''} onChange={(e) => setFormData({ ...formData, year: e.target.value })} /></label><br />
    <label>Final Year Score: <input type="text" value={formData.finalScore || ''} onChange={(e) => setFormData({ ...formData, finalScore: e.target.value })} /></label><br />
    <label>University: <input type="text" value={formData.university || ''} onChange={(e) => setFormData({ ...formData, university: e.target.value })} /></label>
  </div>
);

// PG Component
const PGComponent = ({ formData, setFormData }) => (
  <div>
    <label>Year: <input type="text" value={formData.pgYear || ''} onChange={(e) => setFormData({ ...formData, pgYear: e.target.value })} /></label><br />
    <label>Thesis Subject: <input type="text" value={formData.thesis || ''} onChange={(e) => setFormData({ ...formData, thesis: e.target.value })} /></label>
  </div>
);

// UnderGrad Component
const UnderGradComponent = ({ formData, setFormData }) => (
  <div>
    <label>SSC: <input type="text" value={formData.ssc || ''} onChange={(e) => setFormData({ ...formData, ssc: e.target.value })} /></label><br />
    <label>HSC: <input type="text" value={formData.hsc || ''} onChange={(e) => setFormData({ ...formData, hsc: e.target.value })} /></label>
  </div>
);

// Main Form Component
const UserDetailsForm = () => {
  const [educationLevel, setEducationLevel] = useState('');
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData, educationLevel });
  };

  return (
    <div>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label><br />
        <label>Email: <input type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></label><br />

        <label>
          Education Level:
          <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
            <option value="">Select</option>
            <option value="graduate">Graduate</option>
            <option value="pg">PG</option>
            <option value="undergrad">UnderGrad</option>
          </select>
        </label><br />

        {/* Conditional Rendering */}
        {educationLevel === 'graduate' && <GraduateComponent formData={formData} setFormData={setFormData} />}
        {educationLevel === 'pg' && <PGComponent formData={formData} setFormData={setFormData} />}
        {educationLevel === 'undergrad' && <UnderGradComponent formData={formData} setFormData={setFormData} />}

        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserDetailsForm;
