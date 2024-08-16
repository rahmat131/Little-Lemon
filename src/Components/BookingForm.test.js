import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

// Mock the API functions
jest.mock('./api.js', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
  submitAPI: jest.fn(() => true),
}));

describe('BookingForm Tests', () => {
  beforeEach(() => {
    // Mock the alert function before each test
    window.alert = jest.fn();
  });

  afterEach(() => {
    // Clean up the alert mock after each test
    jest.restoreAllMocks();
  });

  test('renders BookingForm component and finds "Guests" label', () => {
    render(<BookingForm />);
    
    // Print the current state of the DOM to help with debugging
    screen.debug(); 

    // Verify that the "Guests" label is present
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
  });

  test('Submit button is disabled if the number of guests is less than 2', () => {
    render(<BookingForm />);
    
    const submitButton = screen.getByText('Reserve');
    const guestsInput = screen.getByLabelText(/Guests/i);

    // Initially, it should be disabled because the number of guests is set to 1 by default
    expect(submitButton).toBeDisabled();

    // Change the number of guests to 2
    fireEvent.change(guestsInput, { target: { value: 2 } });

    // The submit button should now be enabled
    expect(submitButton).toBeEnabled();
  });
});
