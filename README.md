# Little Lemon Restaurant Booking App

## Overview

This project is a booking application for the fictional Little Lemon restaurant. It allows users to reserve tables by selecting a date, time, number of guests, and occasion. The application dynamically fetches available times based on the selected date and prevents double bookings by using simulated APIs.

This project is part of the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) course offered on Coursera. It demonstrates skills in React, routing, form handling, and integrating APIs.

## Features

- **Home Page**: Welcome page with navigation links.
- **Reservation Page**: Allows users to book a table by choosing a date, time, number of guests, and occasion.
- **Booking Confirmation Page**: Displays a confirmation message after a successful reservation.
- **Navigation**: Links to other pages like About, Menu, Order Online, Login, and Contact.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **API Simulation**: Provides simulated API functions for fetching available times and submitting bookings.

## Project Structure

- **`src/`**: Contains all the source code for the application.
  - **`Components/`**: Contains React components for different pages and UI elements.
    - `Home.js`
    - `About.js`
    - `Menu.js`
    - `BookingPage.js`
    - `BookingForm.js`
    - `ConfirmedBooking.js`
    - `Header.js`
    - `Footer.js`
  - **`api.js`**: Simulated API functions for fetching available times and submitting bookings.
  - **`App.js`**: Main application component with routing setup.
  - **`index.js`**: Entry point for the React application.

## Usage

1. **Navigate to the Reservation Page**: Click on the "Reservation" link in the navigation menu.
2. **Fill Out the Booking Form**: Select a date, time, number of guests, and occasion.
3. **Submit the Form**: Click "Reserve" to submit the booking.
4. **Confirmation**: If the booking is successful, you will be redirected to the confirmation page.

## API Functions

- **`fetchAPI(date)`**: Fetches available reservation times for the given date.
- **`submitAPI(formData)`**: Submits the booking form data and returns `true` if the submission is successful.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or find bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

This project was developed as part of the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) course on Coursera. Special thanks to the course instructors for their guidance and resources.
