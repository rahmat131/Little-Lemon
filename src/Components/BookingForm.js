// // BookingForm.jsx
// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('17:00');
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState('Birthday');

//   const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     alert(`Your event for ${occasion} has been reserved on ${date} for ${guests} guest/s at ${time} hours`);

//     console.log({ date, time, guests, occasion });
//   };

//   return (
//     <div className="FormWrapper">
//     <form onSubmit={handleSubmit} >
//       <label htmlFor="res-date">Choose date</label>
//       <input className='InpSel'
//       required
//         type="date"
//         id="res-date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <label htmlFor="res-time">Choose time</label>
//       <select className='InpSel'
//         id="res-time"
//         required
//         value={time}
//         placeholder="--:--"
//         onChange={(e) => setTime(e.target.value)}
//       >
//         {availableTimes.map((t, index) => (
//           <option key={index} value={t}>
//             {t}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="guests">Number of guests</label>
//       <input className='InpSel'
//         type="number"
//         required
//         placeholder="1"
//         min="1"
//         max="10"
//         id="guests"
//         value={guests}
//         onChange={(e) => setGuests(e.target.value)}
//       />
//       <label htmlFor="occasion">Occasion</label>
//       <select className='InpSel'
//         id="occasion"
//         required
//         value={occasion}
//         onChange={(e) => setOccasion(e.target.value)}
//       >
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>
//       <input className='mySubbtn' type="submit" value="Reserve" />
//     </form>
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api.js';


const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch available times when the component mounts and when the date changes
  useEffect(() => {
    if (date) {
      // Ensure fetchAPI is available globally
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
      setTime(times.length > 0 ? times[0] : ''); // Set the first available time if any
    }
  }, [date]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Ensure submitAPI is available globally
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
