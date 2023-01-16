import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

import axios from "axios";

import { useMutation } from "@apollo/client";
import { SAVE_PRODUCT } from "../utils/mutations";

const SearchProduct = () => {
  const [saveProd, { error }] = useMutation(SAVE_PRODUCT);
  const [productsByCategory, setProductByCategory] = useState([]);

  function getProducts(category) {
    axios.get(`/categories/${category}`).then((response) => {
      //console.log(response.data)
      const productsByCategory = response.data.filteredData;
      const { _id, title, description } = productsByCategory;
      console.log(productsByCategory);
      //console.log(_id, title, description)
      setProductByCategory(productsByCategory);
    });
  }

  async function handleFaveProd(productData) {
    try {
      await saveProd({ variables: { productData } });
      console.log(productData);
    } catch (error) {}
  }

  return (
    <div>
      <Container>
        <h4 className="pageTitle">
          Click the category name to search for available products:
        </h4>
        <Row className="searchButtons">
          <Col className="singleButton">
            <button className="buttons" onClick={() => getProducts("acne")}>
              acne
            </button>
          </Col>

          <Col className="singleButton">
            <button
              className="buttons"
              onClick={() => getProducts("pigmentation")}
            >
              pigmentation
            </button>
          </Col>

          <Col className="singleButton">
            <button
              className="buttons"
              onClick={() => getProducts("anti-aging")}
            >
              anti-aging
            </button>
          </Col>

          <Col className="singleButton">
            <button
              className="buttons"
              onClick={() => getProducts("dark circles")}
            >
              dark circles
            </button>
          </Col>

          <Col className="singleButton">
            <button className="buttons" onClick={() => getProducts("redness")}>
              redness
            </button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="searchResults">
          {productsByCategory.map((product) => (
            <Col className="singleCard">
              <Card style={{ width: "18rem" }} key={product._id}>
                <Card.Img variant="top" src={product.main_image}></Card.Img>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>brand: {product.brand}</ListGroup.Item>
                    <ListGroup.Item>price: {product.price}</ListGroup.Item>
                    {/* <ListGroup.Item>category: #{product.category}</ListGroup.Item> */}
                    <ListGroup.Item>rating: {product.rating}</ListGroup.Item>
                    <ListGroup.Item>
                      rated: {product.ratings_total}
                    </ListGroup.Item>
                  </ListGroup>

                  {/* <Card.Text>{product.description}</Card.Text> */}
                  <Card.Link href={product.link} target="_blank">
                    click for more details
                  </Card.Link>
                  <Button onClick={() => handleFaveProd(product._id)}>
                    Save Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchProduct;
