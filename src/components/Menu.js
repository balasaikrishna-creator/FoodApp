import React , {useState} from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../slice';
import idliPic from "../assests/images/idliPic.jpg";
import menuPic from "../assests/images/menuPic.png";
import masaladosaPic from "../assests/images/masaladosaPic.jpg";
import dosaPic from "../assests/images/dosaPic.jpg";
import gheeroastPic from "../assests/images/gheeroastPic.jpg";
import vegbiryani from "../assests/images/vegbiryani.jpg";
import paneerbiryani from "../assests/images/paneerbiryani.jpg";
import eggbiryani from "../assests/images/eggbiryani.jpg";
import poori from '../assests/images/poori.jpg';
import mealsPic from '../assests/images/mealsPic.jpg';
import sambarvada from '../assests/images/sambarvada.jpg';
import vada from '../assests/images/vada.jpg';
import sambarIdli from '../assests/images/sambarIdli.jpg';
import vegIcon from '../assests/images/vegIcon.png'
import eggIcon from '../assests/images/eggIcon.png'
import { Link } from 'react-router-dom';

const { Meta } = Card;

const items = [
  {
    title: "Idli (2)",
    description: "Idli is a soft, fluffy, steamed rice cake made from fermented rice and urad dal batter. It's often enjoyed with chutney and sambar.",
    imgSrc: idliPic,
    cost : "45/-",
    Icon : vegIcon
  },
  {
    title: "Dosa",
    description: "Dosa is a savory, crispy crepe made from a fermented mixture of rice and lentils, a staple in South Indian. It's typically paired with coconut chutney, sambar.",
    imgSrc: dosaPic,
    cost : "60/-",
    Icon : vegIcon
  },
  {
    title: "Sambar Idli (2)",
    description: "Sambar Idli is a beloved South Indian dish featuring soft, steamed idlis served with a flavorful sambar. This comforting combination is a perfect for breakfast.",
    imgSrc: sambarIdli,
    cost : "70/-",
    Icon : vegIcon
  },
  {
    title: "Masala Dosa",
    description: "Masala dosa is a popular South Indian dish consisting of a crispy, fermented rice and lentil crepe filled with a spiced potato mixture.",
    imgSrc: masaladosaPic,
    cost : "70/-",
    Icon : vegIcon
  },
  {
    title: "Ghee Roast",
    description: "Ghee dosa is a variation of the traditional dosa, where the crepe is cooked with generous amounts of ghee. This gives the dosa a rich crispy texture.",
    imgSrc: gheeroastPic,
    cost : "80/-",
    Icon : vegIcon
  },
  {
    title: "Poori (2)",
    description: "Poori is a deep-fried Indian bread made from unleavened wheat flour dough, rolled into small discs. It’s crispy, golden, and often served with potato curry.",
    imgSrc: poori,
    cost : "80/-",
    Icon : vegIcon
  },
  {
    title: "Vada (2)",
    description: "Vada is a snack made from seasoned batter of urad dal, deep-fried to golden perfection, crispy on the outside and soft on the inside, making them irresistible.",
    imgSrc: vada,
    cost : "50/-",
    Icon : vegIcon
  },
  {
    title: "Sambar Vada (2)",
    description: "Sambar Vada is a South Indian delight featuring crispy lentil fritters soaked in a flavorful, spiced lentil stew. Enjoy the perfect blend of textures and spices.",
    imgSrc: sambarvada,
    cost : "70/-",
    Icon : vegIcon
  },
  {
    title: "Veg Biryani",
    description: "Veg biryani is a flavorful rice dish made with a variety of vegetables, aromatic spices, and basmati rice. The vegetables are typically cooked with spices, then layered with partially cooked rice and slow-cooked to perfection.",
    imgSrc: vegbiryani,
    cost : "200/-",
    Icon : vegIcon
  },
  {
    title: "Egg Biryani",
    description: "Egg biryani is a delicious dish made with basmati rice, boiled eggs, and a blend of spices. Then layered with partially cooked rice and slow-cooked to allow the flavors to meld.",
    imgSrc: eggbiryani,
    cost : "250/-",
    Icon : eggIcon
  },
  {
    title: "Paneer Biryani",
    description: "Paneer biryani is a flavorful rice dish featuring basmati rice, marinated paneer and a medley of spices. The paneer is cooked with onions, tomatoes, and spices, then layered with rice and slow-cooked to perfection.",
    imgSrc: paneerbiryani,
    cost : "270/-",
    Icon : vegIcon
  },
  {
    title: "Andhra Veg Meals",
    description: "Andhra meals are known for their bold, spicy flavors and typically include rice,pickles, and vegetable curries. They are accompanied by papad, curd, and a sweet dish for a complete dining experience.",
    imgSrc: mealsPic,
    cost : "300/-",
    Icon : vegIcon
  }
];

function Menu() {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.items.selectedItems);

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(selectedItems);
  
  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(removeItem(item));
  };

  const hasSelectedItems = selectedItems.length > 0;


  return (
    <div className='menu'>
      <img src={menuPic} alt='menu' />
      <input
        className='menu-input'
        type='text'
        placeholder={"Search for Dishes"}
        onChange={handleChange}
      />
      <div>
        {filteredItems.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 700,
              margin: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Meta
                 title={
                  <>
                    <img src={item.Icon} alt="vegIcon" style={{ marginBottom: "5px", width:"16px" }} />
                    {item.title}
                  </>
                }
                description={
                  <>
                    <div>{item.description}</div>
                    <div style={{ fontWeight: "600", color:"black" , marginTop : "8px"}}>Cost: {item.cost}</div>
                  </>
                } 
                style={{ flex: 1 }}
              />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  alt={item.title}
                  src={item.imgSrc}
                  style={{ width: "150px", height: "100px", marginLeft: "auto", borderRadius: "6px" }}
                />
                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}> 

                  <Button onClick={() => handleDecrement(item)} style={{ fontWeight: "600", border: "none" }}>-</Button> 
                  <span style={{ margin: "0 10px" }}> 
                    {selectedItems.filter((selectedItem) => selectedItem.title === item.title).length} 
                  </span> 
                  <Button onClick={() => handleIncrement(item)} style={{ border: "none" }}>+</Button> 
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {hasSelectedItems && (
      <footer className="menu-footer">
        <p className="menu-footer-text">
          {selectedItems.length} item(s) selected
        </p>
        <Link to="/cart">
          <Button style={{fontWeight : "600"}} className="menu-footer-button">{"View Cart "}</Button>
        </Link>
      </footer>
    )}

    </div>
  );
}

export default Menu;
