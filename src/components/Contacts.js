import React from 'react'
import {useContacts} from '../context/ContactsProvider'
import {ListGroup} from 'react-bootstrap'

const Contacts = () => {

    const {contacts}=useContacts()
    console.log(contacts);
    console.log(contacts.id);

    return (
        <ListGroup variant="flush">
            {contacts.map(contact=>(
                <ListGroup.Item key={contact.id}>
                    {contact.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
     )
}

export default Contacts
