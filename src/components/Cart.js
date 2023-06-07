import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from "../store/cartSlice";

const Cart = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.cart)

  const removeFromCart = (product) =>{
    dispatch(remove(product))
  }

  const cards = products.map((product) => (
    <div className="col-md-12" key={product.id}>
      <Card className="h-100">
        <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px'}}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger" onClick={()=>removeFromCart(product)}>Remove item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>My cart</h1>
      <div className="row">
          {cards}
      </div>
    </>
  )
}

export default Cart