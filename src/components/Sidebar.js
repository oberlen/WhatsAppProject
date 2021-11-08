import Button from '@restart/ui/esm/Button'
import React, { useState }from 'react'
import { Modal, Nav, Tab } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewContactModal from './NewContactModal'
import NewConversationsModal from './NewConversationsModal'

const CONVERSATIONS_KEY='conversations'
const CONTACT_KEY='contacts'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen=activeKey === CONVERSATIONS_KEY

    const closeModal=()=>{
        setModalOpen(false)
    }

    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                        conversations
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey={CONTACT_KEY}>
                        contacts
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content className="border-right ovcrflow-auto flex-grow-1">
                        <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                            <Conversations/>
                        </Tab.Pane>
                        <Tab.Pane eventKey={CONTACT_KEY}>
                            <Contacts/>
                        </Tab.Pane>
                    </Tab.Content>
                    <div className="p-2 border-top border-right small">
                        Your ID: <span className="text-muted">{id}</span>
                    </div>
                    <Button onClick={()=>setModalOpen(true)}>
                        New {conversationsOpen ? 'conversations': 'contact'}
                    </Button>

                
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen?
                <NewConversationsModal closeModal={closeModal}/>:
                <NewContactModal closeModal={closeModal}/>
                }
            </Modal>
        </div>
    )
}

export default Sidebar
