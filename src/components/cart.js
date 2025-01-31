import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import cart from '../assests/images/cart.png';
import backToMenu from '../assests/images/backToMenu.png';
import { Link } from 'react-router-dom';

function Cart() {
  const selectedItems = useSelector((state) => state.items.selectedItems);

  const itemCounts = selectedItems.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = { quantity: 0, totalCost: 0, image: item.imgSrc };
    }
    acc[item.title].quantity += 1;
    acc[item.title].totalCost += parseInt(item.cost);
    return acc;
  }, {});

  const totalCost = Object.values(itemCounts).reduce((sum, item) => sum + item.totalCost, 0);

  return (
    <div style={{ backgroundColor: "#000000", padding: "20px", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src={cart} alt='cart' style={{ width: "60px" }} />
        <div style={{ marginTop: "10px" }}>
          <Link to="/menu">
            <img src={backToMenu} alt='menu' style={{ width: "100px" }} />
          </Link>
        </div>
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        {Object.entries(itemCounts).length === 0 ? (
          <p style={{ color: "#ffffff", fontSize: "18px", textAlign: "center" }}>No items in the cart.</p>
        ) : (
          Object.entries(itemCounts).map(([title, { quantity, totalCost, image }], index) => (
            <Card
              key={index}
              style={{ backgroundColor: '#1c1c1c', marginBottom: '20px', borderRadius: '10px', color: '#ffffff' }}
              bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' , margin :"auto auto auto 0" }}>
                <img src={image} alt={title} style={{ width: "80px", height: "80px", borderRadius: '8px', marginRight: '20px' }} />
                <div>
                  <h3 style={{ margin: 0 }}>{title}</h3>
                  <p style={{ margin: '5px 0' }}>Quantity: {quantity}</p>
                </div>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '18px' }}>Price:  ₹{totalCost}</p>
              </div>
            </Card>
          ))
        )}
        {Object.entries(itemCounts).length > 0 && (
          <div style={{ textAlign: "right", marginTop: "20px", color: '#ffffff' }}>
            <h2>Total:  ₹{totalCost}</h2>
            <Button type="primary" size="large">Proceed to Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
