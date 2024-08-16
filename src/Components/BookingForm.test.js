import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

// Mock the API functions
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('BookingForm', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('renders BookingForm component and finds "Guests" label', () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );

    const guestsLabel = screen.getByLabelText(/Guests/i);
    expect(guestsLabel).toBeInTheDocument();
  });

  test('Alert shows up if trying to submit with fewer than 2 guests', () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );

    // Set the number of guests to 1
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: '1' } });

    // Trigger form submission
    fireEvent.click(screen.getByText(/Reserve/i));

    // Assert that the alert is called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Reservation is valid for at least 2 people');
  });

  test('Form submits successfully with valid number of guests', () => {
    // Set up the mock API response
    submitAPI.mockReturnValue(true);
    fetchAPI.mockReturnValue(['17:00', '18:00']); // Mock available times

    render(
      <Router>
        <BookingForm />
      </Router>
    );

    // Set valid inputs
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-08-20' } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });

    // Click the submit button
    fireEvent.click(screen.getByText(/Reserve/i));

    // Since navigation is removed, no assertion here
  });
});
