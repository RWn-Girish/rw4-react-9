import { useEffect, useState } from "react";
import { Button, Card, Container, Row, Table } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Home = () => {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // console.log('id: ', id);
    let data = getStorageData();
    let updateData = data.filter((v) => v.id != id);
    setStorageData(updateData);
    setProducts(updateData);
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleSearch = () => {
    let searchData = [...products].filter(
      (product) =>
        product.title.includes(search) || product.category.includes(search)
    );
    setProducts(searchData);
    setSearch("");
  };

  const handleASC = () => {
    let sortedData = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedData);
  };
  const handleDESC = () => {
    let sortedData = [...products].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setProducts(sortedData);
  };

  const handleSort = (field, type) => {
    let sortedData;
    if (type == "asc") {
      if(field == 'price'){
          sortedData = [...products].sort((a, b) => a[field] - (b[field]));
      }else
      sortedData = [...products].sort((a, b) => a[field].localeCompare(b[field]));
    } else {
      if(field == 'price'){
          sortedData = [...products].sort((a, b) => b[field] - (a[field]));
      }else
      sortedData = [...products].sort((a, b) => b[field].localeCompare(a[field]));
    }

    setProducts(sortedData);
  };

  useEffect(() => {
    let data = getStorageData();
    setProducts(data);
  }, []);
  return (
    <>
      <Container>
        <h2>Product Details</h2>
        <div>
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={handleSearch}>Search</button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleASC}>ASC</button>&nbsp; || &nbsp;
          <button onClick={handleDESC}>DESC</button>
        </div>
        <Row className="gap-3">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  Title{" "}
                  <button onClick={() => handleSort("title", "asc")}>⬆</button>{" "}
                  ||{" "}
                  <button onClick={() => handleSort("title", "desc")}>⬇</button>
                </th>
                <th>Desc</th>
                <th>
                  Category{" "}
                  <button onClick={() => handleSort("category", "asc")}>
                    ⬆
                  </button>{" "}
                  ||{" "}
                  <button onClick={() => handleSort("category", "desc")}>
                    ⬇
                  </button>
                </th>
                <th>
                  Price{" "}
                  <button onClick={() => handleSort("price", "asc")}>⬆</button>{" "}
                  ||{" "}
                  <button onClick={() => handleSort("price", "desc")}>⬇</button>
                </th>
                <th>Image</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prodcut) => (
                <tr>
                  <td>{prodcut.id}</td>
                  <td>{prodcut.title}</td>
                  <td>{prodcut.desc}</td>
                  <td>{prodcut.category}</td>
                  <td>{prodcut.price}</td>
                  <td>
                    <img src={prodcut.image} height={100} />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(prodcut.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(prodcut.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Home;
