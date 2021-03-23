import React from 'react'
import {Container, Form , Button }from "react-bootstrap"
import {withRouter} from "react-router"
import { postLogin } from './functions/api'
class Login extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password: "",
        }
        this.handleChangeInput=this.handleChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChangeInput (event){
        const name =event.target.name;
        const value =event.target.value;
        console.warn(name,value,event);
        this.setState({
            [name]:value 
        })
    }

    onSubmit(event){
        event.preventDefault()
        postLogin(this.state)
        .then(response=>{
            this.props.history.push('/')
        })
        .catch(err =>{
            console.warn(err)
        })
    }

    render(){
        return(
          
        <Container fluid ="sm">
          <h1 className="h1log">Benvenuto</h1>
          <h3 className="sublog">Per entrare effettua il Login</h3>
            <Form onSubmit={this.onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    onChange={this.handleChangeInput}
    name="email"
    placeholder="Enter email"
    required
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    onChange={this.handleChangeInput} 
    name="password" 
    placeholder="Password"
    required
    />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit"className="btnLogin">
    Submit
  </Button>
</Form>
        </Container>
    )
    }
}

export default withRouter(Login)