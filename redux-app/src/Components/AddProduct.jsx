import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../services/actions/productAction";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const intialState = {
            id: "",
            title: "",
            desc: "",
            price:"",
            quantity: "",
            image: "",
            category: ""
        }
    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
    const {name, value} = e.target;
    setInputForm({
        ...inputForm,
        [name]: value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        inputForm.id = generateUniqueId({length: 10})
        console.log('submit: ', inputForm);
        dispatch(addProduct(inputForm))
        setInputForm(intialState);
        navigate("/");
    }
    return(
        <>
        <Container>
            <h2>Add Product Details</h2>
            <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Title
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="title" value={inputForm.title} onChange={handleChanged} placeholder="Enter Title" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="desc" value={inputForm.desc} onChange={handleChanged} placeholder="Enter Description" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
              <option>Select Category</option>
              <option value="Electronics" >Electronics</option>
              <option value="Fashion" >Fashion</option>
              <option value="Cosmatics" >Cosmatics</option>
              <option value="Jewellary" >Jewellary</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" name="price" value={inputForm.price} onChange={handleChanged} placeholder="Enter Price" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Quantity
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" name="quantity" value={inputForm.quantity} onChange={handleChanged} placeholder="Enter Quantity" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Image
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="image" value={inputForm.image} onChange={handleChanged} placeholder="Enter Image URL" />
          </Col>
        </Form.Group>
        <Button type="submit">Add Product</Button>
      </Form>
        </Container>
        </>
    )
}

export default AddProduct;