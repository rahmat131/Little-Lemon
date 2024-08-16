import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api.js';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Fetch available times when the component mounts and when the date changes
  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
      setTime(times.length > 0 ? times[0] : '');
    }
  }, [date]);

  // Update button state based on the number of guests
  useEffect(() => {
    if (guests >= 2) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [guests]);

  // Handle form submission
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

    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      alert(`Your event for ${occasion} has been reserved on ${date} for ${guests} guest/s at ${time} hours`);
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
          onChange={(e) => setGuests(Number(e.target.value))}
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

        <input
          className="mySubbtn"
          type="submit"
          value="Reserve"
          disabled={isButtonDisabled}
        />
      </form>
    </div>
  );
};

export default BookingForm;
