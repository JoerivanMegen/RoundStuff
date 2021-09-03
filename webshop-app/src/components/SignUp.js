import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const firstNameRef = useRef();
    const surnameRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Your passwords do not match!')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="first-name" ref={firstNameRef} required />
                        </Form.Group>
                        <Form.Group id="last-name">
                            <Form.Label> Surname</Form.Label>
                            <Form.Control type="surname" ref={surnameRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 text-center" type="submit">Register</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                <p className="text-center">Already have an account? <Link to="/login">Log in!</Link></p>
            </div>
        </>
    )
}

export default SignUp
