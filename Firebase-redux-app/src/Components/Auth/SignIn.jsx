import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, signInWithGoogleAsync } from "../../services/actions/authAction";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, errorMsg} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(signInAsync(inputForm))
    }

    const handleLogin = () => {
        dispatch(signInWithGoogleAsync());
    }

    useEffect(()=> {
        if(user){
            navigate("/");
        }
    }, [user]);

    return(
        <>
            <Container>
                <h2>Sign In Form</h2>
                {errorMsg ? <p>{errorMsg}</p> : ""}
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="email" name="email" value={inputForm.email} onChange={handleChanged} placeholder="Enter Email" />
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="password" name="password" value={inputForm.password} onChange={handleChanged} placeholder="Enter Password" />
                    </Col>
                    </Form.Group>
                    <Button type="submit">SignIn</Button> &nbsp;
                    <Button onClick={handleLogin} variant="warning">SignIn With Google</Button>
                </Form>
                <div>
                    <p>Create An Account ? &nbsp;  <Link to={"/signup"}>SignUp</Link> </p> 
                </div>
            </Container>
        </>
    )
}

export default SignIn;