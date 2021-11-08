import React ,{useContext,useState, useEffect} from 'react'
import { Socket } from 'socket.io'
import io from 'socket.io-client'


const SocketContext=React.createContext()

export function useSocket()
{
    return useContext(SocketContext)
}

const SocketProvider = ({id,children}) => {

    const [socket, setSocket] = useState()

    useEffect(() => {
       const newSocket=io('http://localhost:4001',{query:{id}})

       setSocket(newSocket)
       return ()=> newSocket.close()
    }, [id])
    return (
       
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
