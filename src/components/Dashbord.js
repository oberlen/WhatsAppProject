import React from 'react'
import OpenConversations from './OpenConversations'
import Sidebar from './Sidebar'
import {useConversations} from '../context/ConversationsProvider'

const Dashbord = ({id}) => {
    const {selectedConversations}=useConversations()
    return (

        <div className="d-flex" style={{height: '100vh'}} >
        <Sidebar id={id}/>
        {/* <OpenConversations/> */}
        {selectedConversations && <OpenConversations/>}
        </div>
    )
}

export default Dashbord
