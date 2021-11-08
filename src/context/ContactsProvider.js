import React ,{useContext} from 'react'
import UseLocalStorage from '../Hooks/UseLocalStorage'

const ContactsContext=React.createContext()

export function useContacts()
{
    return useContext(ContactsContext)
}

export const ContactsProvider = ({children}) => {
    const [contacts, setContacts] = UseLocalStorage('contacts',[])

    const createContact=(id,name)=>
    {
        setContacts(prevContacts => {
            return [...prevContacts,{id,name}]
        })
    }
    
    return (
        <ContactsContext.Provider value={{contacts,createContact}} >
            {children}
        </ContactsContext.Provider>
    )
}


