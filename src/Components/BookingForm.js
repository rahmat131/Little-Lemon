//-------------------------------Updated-------
// BookingForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI } from './api';

const BookingForm = ({ submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
      setTime(times.length > 0 ? times[0] : ''); // Set first available time if any
    }
  }, [date]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guests < 2) {
      alert("Reservation is valid for at least 2 people");
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const isSubmitted = submitForm(formData);

    if (isSubmitted) {
      navigate('/confirmed'); // Navigate to confirmation page
    } else {
      alert('Failed to reserve your table. Please try again.');
    }
    console.log({ date, time, guests, occasion });
  };

  return (
    <div className="FormWrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          className="InpSel"
          required
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          className="InpSel"
          id="res-time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="InpSel"
          type="number"
          required
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          className="InpSel"
          id="occasion"
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input className="mySubbtn" type="submit" value="Reserve" />
      </form>
    </div>
  );
};

export default BookingForm;

//---------------------------------------------