import React,{useState} from 'react'
import {Modal , Form ,Button} from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'
import {useConversations} from '../context/ConversationsProvider'

const NewConversationsModal = ({closeModal}) => {
    const [selectedContactId, setselectedContactId] = useState([])
    const {contacts} = useContacts()
    const {createConversations} = useConversations()


    const handlerSubmit=(e) => {
        e.preventDefault()

        createConversations(selectedContactId)

        closeModal()
    }
    const handlerCheckBoxChange=(contactId)=> {
        setselectedContactId(prevselectContactId=>{
            if(prevselectContactId.includes(contactId)){
                return prevselectContactId.filter(prevId=>{
                    return contactId !==prevId
                })
            }
            else
            {
                return [...prevselectContactId,contactId]
            }
        })
    }
    return (
        <>
        <Modal.Header closeButton>
             Create
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handlerSubmit}>
                {contacts.map(contact=>(
                    <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check
                        type="checkbox" 
                        value={selectedContactId.includes(contact.id)}
                        label={contact.name}
                        onChange={()=>handlerCheckBoxChange(contact.id)}
                        />
                      
                        </Form.Group>
                ))}
               
                <Button type="submit">Create</Button>
            </Form>


            </Modal.Body>

        </>
    )
}

export default NewConversationsModal
