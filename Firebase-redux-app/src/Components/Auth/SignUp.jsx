import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signUpAsync } from "../../services/actions/authAction";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isCreated, errorMsg} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        name: "",
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
       dispatch(signUpAsync(inputForm));
    }

    useEffect(()=> {
        if(isCreated){
            navigate("/signin");
        }
    }, [isCreated]);
    return(
        <>
            <Container>
                <h2>Sign Up Form</h2>
                {errorMsg ? <p>{errorMsg}</p> : ""}
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Full Name
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" name="name" value={inputForm.name} onChange={handleChanged} placeholder="Enter Full Name" />
                    </Col>
                    </Form.Group>
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
                    <Button type="submit">SignUp</Button>
                </Form>
                <div>
                    <p>Already An Account ? &nbsp;  <Link to={"/signin"}>SignIn</Link> </p> 
                </div>
            </Container>
        </>
    )
}

export default SignUp;