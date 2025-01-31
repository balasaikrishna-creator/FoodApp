import React , {useState}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Card, Button,Modal } from 'antd';
import cart from '../assests/images/cart.png';
import backToMenu from '../assests/images/backToMenu.png';
import { Link } from 'react-router-dom';
import { resetState } from '../slice';

function Cart() {
  const selectedItems = useSelector((state) => state.items.selectedItems);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const itemCounts = selectedItems.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = { quantity: 0, totalCost: 0, image: item.imgSrc , icon : item.Icon};
    }
    acc[item.title].quantity += 1;
    acc[item.title].totalCost += parseInt(item.cost);
    return acc;
  }, {});

  const totalCost = Object.values(itemCounts).reduce((sum, item) => sum + item.totalCost, 0);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCheckout = () => {
    setIsModalVisible(true)
  }
  const handleReset =() =>{
    dispatch(resetState());
  }

  return (
    <div style={{ backgroundColor: "#000000", padding: "20px", minHeight: "100vh"}}>
      <div style={{ display:"flex" }}>
        <div style={{ textAlign: "center", width: "90%", display:"flex", justifyContent:"center", marginLeft:"140px" }}>
        <img src={cart} alt='cart' style={{ width: "60px" }} />
      </div>
      <div style={{ width:"10%", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Link to="/menu">
            <img src={backToMenu} alt='menu' style={{ width: "100px" }} />
          </Link>
        </div></div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        {Object.entries(itemCounts).length === 0 ? (
          <p style={{ color: "#ffffff", fontSize: "18px", textAlign: "center" }}>No items in the cart.</p>
        ) : (
          Object.entries(itemCounts).map(([title, { quantity, totalCost, image,icon }], index) => (
            <Card
              key={index}
              style={{ backgroundColor: 'white', marginBottom: '20px', borderRadius: '10px', color: 'black' }}
              bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
             <div style={{ display: 'flex', alignItems: 'center', margin: "auto auto auto 0", justifyContent: "space-between", width: "100%" }}>
                <img src={image} alt={title} style={{ width: "100px", height: "85px", borderRadius: '8px' }} />
                <div style={{ flex: 1, paddingLeft: '20px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <img src={icon} alt='icon' style={{borderRadius:"3px", width:"16px"}}></img>
                  <h4 style={{ margin: 0 }}>{title}</h4>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p style={{ margin: '5px 0',fontWeight :"400" }}>Quantity: {quantity}</p>
                </div>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '18px', fontWeight:"600" }}>₹{totalCost}</p>
              </div>
            </Card>
          ))
        )}
        {Object.entries(itemCounts).length > 0 && (
          <div style={{ textAlign: "right", marginTop: "20px", color: '#ffffff' }}>
            <h2>Total:  ₹{totalCost}</h2>
            <Button type="primary" size="large" onClick={handleCheckout}>Confirm the Order</Button>
          </div>
        )}
        <Modal title="Thank you for ordering" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
          footer = {[
          <Link to="/">
            <Button style={{fontWeight : "600"}} className="menu-footer-button" onClick={handleReset}>{"Go to Home Page"}</Button>
          </Link>]}>
          <p>Enjoy the moment, your tasty order is being prepared!</p>
        </Modal>
    
      </div>
    </div>
  );
}

export default Cart;
