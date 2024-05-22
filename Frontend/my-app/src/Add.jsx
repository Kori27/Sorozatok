import React, { useState } from 'react';
import axios from 'axios';


const MyForm = () => {
  const [formData, setFormData] = useState({
    cim: '',
    datum: '',
    evad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios segítségével küldjük el a form adatait a szervernek
      await axios.post('http://localhost:5001/create', formData);
      console.log('Form data sent successfully');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cim"
        id="cim"
        placeholder="Adja meg a sorozat cimet."
        value={formData.cim}
        onChange={handleChange}
      />
      <input
        type="date"
        name="datum"
        id="datum"
        placeholder="Adja meg a datumot."
        value={formData.datum}
        onChange={handleChange}
      />
      <input
        type="number"
        name="evad"
        id="evad"
        value={formData.evad}
        onChange={handleChange}
      ></input>
      <button type="submit" value="Send">Send</button>
    </form>
  );
};

export default MyForm;