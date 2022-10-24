import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../../Common/ProductCard/ProductCard";

const FlashSale = () => {
  //51 min to start again in video lecture 4
  return (
    <div className="mt-3">
      <Row xs={1} md={2} lg={3} className="g-4">
        {[1, 2, 3, 4, 5].map((product) => (
          <Col key={product}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FlashSale;
