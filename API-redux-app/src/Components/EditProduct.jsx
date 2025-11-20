import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getProduct, updateProduct } from "../services/actions/productAction";

const EditProduct = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    quantity: "",
    image: "",
    category: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit: ", inputForm);
    dispatch(updateProduct(inputForm))
    setInputForm(intialState);
    navigate("/");
  };
  useEffect(()=> {
    if(product){
        setInputForm(product);
    }
  }, [product])

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);
  return (
    <>
      <Container>
        <h2>Edit Product Details</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
                placeholder="Enter Title"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                placeholder="Enter Description"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Select
                aria-label="Default select example"
                name="category"
                onChange={handleChanged}
              >
                <option>Select Category</option>
                <option value="Electronics" selected={inputForm.category == "Electronics"}>Electronics</option>
                <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                <option value="Cosmatics" selected={inputForm.category == "Cosmatics"}>Cosmatics</option>
                <option value="Jewellary" selected={inputForm.category == "Jewellary"}>Jewellary</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                placeholder="Enter Price"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Quantity
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                name="quantity"
                value={inputForm.quantity}
                onChange={handleChanged}
                placeholder="Enter Quantity"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Image
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                placeholder="Enter Image URL"
              />
            </Col>
          </Form.Group>
          <Button type="submit">Update Product</Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
