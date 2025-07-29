 import React, { useState } from 'react';
import SummaryModal from './SummaryModal';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  cnic: '',
  education: '',
  role: '',
  skills: [],
  cv: null,
};

const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];

const JobForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const calculateProgress = (data) => {
    let filled = 0;
    if (data.fullName) filled++;
    if (data.email) filled++;
    if (data.phone) filled++;
    if (data.cnic) filled++;
    if (data.education) filled++;
    if (data.role) filled++;
    if (data.skills.length > 0) filled++;
    if (data.cv) filled++;
    return (filled / 8) * 100;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prev) => {
        const updated = { ...prev, cv: files[0] };
        setProgress(calculateProgress(updated));
        return updated;
      });
    } else {
      setFormData((prev) => {
        const updated = { ...prev, [name]: value };
        setProgress(calculateProgress(updated));
        return updated;
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedSkills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value);
      const updated = { ...prev, skills: updatedSkills };
      setProgress(calculateProgress(updated));
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = Object.entries(formData).filter(
      ([key, value]) =>
        (Array.isArray(value) && value.length === 0) || !value
    );

    if (missingFields.length > 0) {
      alert('Please fill all fields.');
      return;
    }

    setShowModal(true);
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>CNIC</label>
            <input
              type="text"
              className="form-control"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Education Level</label>
            <select
              className="form-select"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Matric">Matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Preferred Role</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label>Skills</label>
            <div className="d-flex flex-wrap gap-3 mt-2">
              {skillsList.map((skill, i) => (
                <div key={i} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={skill}
                    onChange={handleCheckboxChange}
                    checked={formData.skills.includes(skill)}
                  />
                  <label className="form-check-label">{skill}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 mb-4">
            <label>Upload CV</label>
            <input
              type="file"
              className="form-control"
              name="cv"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="progress mb-4">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Application
        </button>
      </form>

      <SummaryModal show={showModal} onHide={() => setShowModal(false)} data={formData} />
    </>
  );
};

export default JobForm;
