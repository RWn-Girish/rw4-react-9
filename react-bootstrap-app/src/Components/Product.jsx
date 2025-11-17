import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import { TbEdit, TbTrash } from "react-icons/tb";

const getStorageData = () => {
  return JSON.parse(localStorage.getItem('products')) || [];
}

const ProductCRUD = () => {
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
    const [storage, setStorage] = useState(getStorageData());
    const [isEdit, setIsEdit] = useState(false);

    const handelDelete = (id) => {
        let data = getStorageData();
        let updateData = data.filter(ele => ele.id != id)
        setStorage(updateData);
    }
    const handelEdit = (id) => {
        let data = getStorageData();
        let rec = data.find(ele => ele.id == id);
        setInputForm(rec)
        setIsEdit(true)
    }

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // inputForm.id = Math.floor(Math.random()*1000000)
        if(!isEdit){
          inputForm.id = generateUniqueId({
            length: 5,
            useLetters: false
          });
          setStorage([...storage, inputForm]);
        }else{
            let data = getStorageData();
            let updatedData = data.map(ele => {
              if(ele.id == inputForm.id){
                return inputForm
              }else{
                return ele
              }
            })
            setStorage(updatedData);
            setIsEdit(false);
        }
        
        setInputForm(intialState)
    }

  useEffect(()=> {
      localStorage.setItem("products", JSON.stringify(storage))
  }, [storage]);

  return (
    <>
      <h1>Product - CRUD</h1>
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
              <option value="Electronics" selected={inputForm.category == 'Electronics'}>Electronics</option>
              <option value="Fashion" selected={inputForm.category == 'Fashion'}>Fashion</option>
              <option value="Cosmatics" selected={inputForm.category == 'Cosmatics'}>Cosmatics</option>
              <option value="Jewellary" selected={inputForm.category == 'Jewellary'}>Jewellary</option>
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
        <Button type="submit">{isEdit ? "Update": "Add"} Product</Button>
      </Form>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            storage.map(product => (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.desc}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><img src={product.image} height={100} /></td>
                <td><Button onClick={()=> handelEdit(product.id)}><TbEdit /></Button></td>
                <td><Button onClick={()=> handelDelete(product.id)} variant="danger"><TbTrash /></Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};

export default ProductCRUD;
