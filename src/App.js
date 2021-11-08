import Dashbord from './components/Dashbord';
import Login from './components/Login';
import UseLocalStorage from './Hooks/UseLocalStorage';
import React from 'react'
import {ContactsProvider} from './context/ContactsProvider'
import { ConversationsProvider } from './context/ConversationsProvider';
import SocketProvider from './context/SocketProvider';

function App() {
  const [id, setId] = UseLocalStorage('id')

  const dashbord=(
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
        <Dashbord id={id}/>
        </ConversationsProvider>
        </ContactsProvider> 
        </SocketProvider>
      )
 
  return (
      
       id? dashbord: <Login onIdSubmit={setId} />

  );
}

export default App;
