import React, {useState,useCallback} from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap'
import {useConversations} from '../context/ConversationsProvider'

const OpenConversations = () => {
    const [text, setText] = useState('')
    const setRef=useCallback(node =>{
        if(node){
        node.scrollIntoView({smooth: true})}
    },[])
    const {sendMessage,selectedConversations}=useConversations()

    const handlerSubmit=(e)=> {
        e.preventDefault()

        sendMessage(selectedConversations.recipients.map(r=>r.id),text,setText)
        setText('')


    }
   

    return (
        <div className="d-flex flex-column flex-grow-1 ">
            
            <div className="overflow-auto flex-grow-1 ">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                {selectedConversations.messages.map((message,index)=>{
                    const lastMessage=selectedConversations.messages.length-1===index
                    return <div ref={lastMessage?setRef:null} key={index} className={`my-1 d-flex flex-column ${message.fromMe?'align-self-end align-items-end ':'align-items-start'}`}>
                        <div className={`rounder px-2 py-1 ${message.fromMe?'bg-primary text-white':'border'}`}>
                            {message.text}
                        </div>
                        <div className={`text-muted small ${message.fromMe?'text-right':''}`}>
                            {message.fromMe?'You':message.senderName}
                        </div>
                    </div>
                })}
                </div>
            </div>
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control as="textarea"
                        required
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        style={{height:'75px', resize: 'none'}}
                        />

                    {/* <InputGroup.Append> */}
                    <Button type="submit">SEND</Button>
                   
                    {/* </InputGroup.Append> */}

                    </InputGroup>

                </Form.Group>
            </Form>
        </div>
    )
}

export default OpenConversations
