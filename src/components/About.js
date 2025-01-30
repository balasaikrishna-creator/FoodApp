import aboutPic from "../assests/images/aboutPic.png";

function About() {
    return (
        <div style={{backgroundColor: "black", color: "white", height: "80.4vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "20px"}}>
            <div>
                <img src={aboutPic} alt="about" style={{height:'200px', width:'350px'}}/>
                <p style={{fontStyle : "italic" , color :"#b8bca5"}}>
                    {"Welcome to Sara's Kitchen, your home away from home, where we bring the authentic flavors of South India to your table. Nestled in the heart of Chennai, our restaurant is a haven for those who crave the warmth and comfort of homely food."}
                </p>
                <p style={{fontStyle : "italic" ,  color :"#b8bca5"}}>
                   {"At Sara's Kitchen, we believe that food is not just about taste, but also about the experience and the memories it creates. From the aromatic spices to the freshest ingredients, every element is carefully selected to ensure that you get a true taste of South India. Whether you're in the mood for a hearty dosa, a flavorful biryani, or a comforting bowl of sambar, we have something to satisfy every palate. We take pride in our commitment to quality and authenticity, ensuring that every bite transports you to the vibrant streets of South India."}
                </p>
                <p style={{fontStyle : "italic",  color :"#b8bca5"}}>
                    {"But it's not just about the food. At Sara's Kitchen, we strive to create a warm and welcoming atmosphere where you can relax and enjoy a meal with family and friends. Our friendly staff is dedicated to providing exceptional service, making sure that your dining experience is nothing short of delightful. Thank you for choosing Sara's Kitchen. We look forward to serving you and making you feel right at home!."}
                </p>    
            </div>
        </div>
    )
}

export default About;