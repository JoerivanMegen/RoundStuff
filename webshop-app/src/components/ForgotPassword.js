import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

function LogIn() {
    const emailRef = useRef();
    const { passwordReset } = useAuth();
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await passwordReset(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError('This email address is not linked to an account (yet)!')
        }
        setLoading(false)
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert className="text-center" variant="danger">{error}</Alert>}
                    {message && <Alert className="text-center" variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 text-center" type="submit">Reset Password</Button>
                        <div className="w-100 mt-3 text-center">
                            <Link to="/login">Remember Password?</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                <p className="text-center">Don't have an account yet? <Link to="/signup">Register here!</Link></p>
            </div>
        </>
    )
}

export default LogIn
