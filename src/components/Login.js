import React , {useRef} from 'react'
import { Container , Form ,Button} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const Login = ({onIdSubmit}) => { 

    const idRef=useRef()
    const handlerSubmit=(e) => {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }
    
    const createNewID=() => {
        onIdSubmit(uuidv4())
    }

    return (
       
        <Container className="align-items-center d-flex" style={{height: '100vh'}}>
            <Form onSubmit={handlerSubmit} className="w-100">  
            <Form.Group>
                <Form.Control type="text" required ref={idRef} placeholder="Enter your ID:"/><br/>
            </Form.Group>
            <Button type="submit" className="m-2">Login</Button>
            <Button  onClick={createNewID} variant="secondary">Create New ID</Button>
            </Form>
     </Container>
           

         )
}

export default Login

