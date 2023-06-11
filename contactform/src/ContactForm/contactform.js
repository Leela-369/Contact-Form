import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button, Table } from 'react-bootstrap';

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newContact.name.trim() !== '' && newContact.email.trim() !== '' && newContact.phone.trim() !== '') {
      setContacts([...contacts, newContact]);
      setNewContact({
        name: '',
        email: '',
        phone: '',
      });
    }
  };

  const handleContactDelete = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <Card className="my-4">
        <Card.Body>
          <Card.Title>Contact Form</Card.Title>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName" className='mt-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newContact.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className='mt-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newContact.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className='mt-3'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={newContact.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Add Contact
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleContactDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactForm;
