import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api.js';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch available times when the component mounts and when the date changes
  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
      setTime(times.length > 0 ? times[0] : ''); // Set the first available time if any
    }
  }, [date]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (guests < 2) {
      window.alert('Reservation is valid for at least 2 people');
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      // alert(`Your event for ${occasion} has been reserved on ${date} for ${guests} guest/s at ${time} hours`);
      navigate('/confirmed'); // Navigate to ConfirmedBooking page
    } else {
      alert('Failed to reserve your table. Please try again.');
    }
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

        <label htmlFor="guests">Guests</label>
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
