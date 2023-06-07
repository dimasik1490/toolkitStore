import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from '../store/productSlice'

const Product = () => {
  const dispatch = useDispatch();
  const {data: products,status} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const addToCart = (product) => {
    dispatch(add(product))
  }

  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

    if (status === 'error') {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Alert variant="danger" style={{ maxWidth: '400px', width: '100%', marginTop: '20px' }}>
            Something went wrong. Please try again later.
          </Alert>
        </div>
      );
  }

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card className="h-100">
        <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px'}}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          $ {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product list</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
