import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListContact.jsx. */
const Contact = ({ contact }) => (
    <Card>
      <Card.Header>
        <Image src={contact.image} width{75} />
        <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
        <Card.Subtitle>{contact.address}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{contact.description}</Card.Text>
      </Card.Body>
    </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    description: Proptypes.string,
  }).isRequired,
};

export default Contact;