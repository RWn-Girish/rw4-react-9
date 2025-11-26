import { useEffect } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteProductAsync,
  getAllProductsAsync,
} from "../services/actions/productAction";

const Home = () => {
  const { products, isLoading, errorMsg } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`)
  };
  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);
  return (
    <>
      <h2>Home Page</h2>
      {
        errorMsg? <p>{errorMsg}</p> : isLoading ? <Spinner /> : <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>{prod.desc}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
              <td>
                <img src={prod.image} height={100} />
              </td>
              <td>
                <Button onClick={() => handleEdit(prod.id)}>Edit</Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(prod.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
    </>
  );
};

export default Home;
