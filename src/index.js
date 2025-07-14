import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    guessCost: '',
    spidrPin: '',
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'spidrPin') {
      value = value.replace(/[^\d]/g, '').slice(0, 16);
      value = value.replace(/(.{4})/g, '$1-').slice(0, 19);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- FORM SUBMISSION ---');
    console.log('First Name:', formData.firstName);
    console.log('Last Name:', formData.lastName);
    console.log('Phone Number:', formData.phoneNumber);
    console.log('Email Address:', formData.emailAddress);
    console.log('Guess Cost:', formData.guessCost);
    console.log('Spidr PIN:', formData.spidrPin);
  };

  const styles = {
    formBackground: {
      maxWidth: 'full',
      margin: '20px auto',
      padding: '2rem',
      backgroundColor: '#0A0A0A',
      borderRadius: '16px',
      boxShadow: '0 0 300px rgba(71, 157, 175, 0.9)',
      fontFamily: '"Raleway, sans-serif',
      color: '#fff',
    },
    logo: {
      width: '150px',
      margin: '0 auto 2rem',
      display: 'block',
      borderRadius: '50%',
      boxShadow: '0 0 100px rgba(71, 157, 175, 0.9)',
    },
    name: {
      display: 'block',
      width: '100%',            
      textAlign: 'center',       
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    input: {
      width: '98%',
      padding: '12px 16px',
      marginBottom: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #333',
      backgroundColor: '#161616',
      color: '#fff',
      fontFamily: '"Raleway, sans-serif',
      fontSize: '18px',
    },
    button: {
      width: '100%',
      padding: '14px 20px',
      backgroundColor: 'rgba(71, 157, 175, 0.9',
      border: 'none',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    },
  };

  return (
    <form style={styles.formBackground} onSubmit={handleSubmit}>
      <h2 style={styles.name}>Spidr Air Fryer</h2>

      <img src={process.env.PUBLIC_URL + "/AirFryer.png"} alt="Spidr Air Fryer" style={styles.logo} />

      <label style={styles.label}>First Name</label>
      <input 
        style={styles.input}
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Last Name</label>
      <input
        style={styles.input}
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Phone Number</label>
      <input
        style={styles.input}
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Email Address</label>
      <input
        style={styles.input}
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Guess the Air Fryer’s Cost (Dollar Amount)</label>
      <input
        style={styles.input}
        type="number"
        name="guessCost"
        value={formData.guessCost}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Very, Very Secret 16-digit Spidr PIN</label>
      <input
        style={styles.input}
        type="text"
        name="spidrPin"
        placeholder="####-####-####-####"
        value={formData.spidrPin}
        onChange={handleChange}
        required
      />

      <button         
        type="submit"
        style={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Submit
      </button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

