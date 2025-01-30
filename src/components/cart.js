// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const { Meta } = Card;

function Cart() {
  const selectedItems = useSelector((state) => state.items.selectedItems);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {selectedItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        selectedItems.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 300,
              margin: '5px',
              backgroundColor: 'aliceblue',
            }}
          >
            <Meta title={item.title}/>
          </Card>
        ))
      )}
    </div>
  );
}

export default Cart;
