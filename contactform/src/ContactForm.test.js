import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm/contactform';

test('renders contact form and adds contact on form submit', () => {
  render(<ContactForm />);
  
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const phoneInput = screen.getByLabelText('Phone');
  const addButton = screen.getByText('Add Contact');
  
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.click(addButton);
  
  const contactRow = screen.getByText('John Doe');
  expect(contactRow).toBeInTheDocument();
});
