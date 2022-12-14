import React from "react";
import {Container, Form, Card, Button, Row} from 'react-bootstrap';
import { LOGIN_ROUTE } from "../utils/consts";
import {useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    console.log(location);
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container 
            className = "d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight-54}}
            >
            <Card style = {{width: 600}} className = "p-5">
                <h2 className= "m-auto">{isLogin ? "Login" : "Registration"}</h2>
                <Form className = "d-flex flex-column">
                    <Form.Control
                        className = "mt-3"
                        placeholder = "Enter your email"
                    />
                    <Form.Control
                        className = "mt-3"
                        placeholder = "Enter your password"
                    />
                    <Row className = "d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                        <div>
                            No account? <a href="/registration">Sign Up</a>
                        </div>
                        :
                        <div>
                            Do you have account? <a href="/login">Login</a>
                        </div>
                        }
                        <Button >
                            {isLogin ?
                            "Login" : "Registration"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;