import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import storeItems from "../data/Items.json";
import { StoreItem } from "../components/StoreItem";
const Stores = () => {
  console.log(storeItems);
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Stores;
