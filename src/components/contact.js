import React, { useState } from 'react';
import contactPic from "../assests/images/contactPic.png"
import { Modal, Button } from 'antd';

function Contact() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            phone: '',
            feedback: ''
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setFormData({
            ...formData
        })
    };

    return (
        <div style={{ backgroundColor: "black", height: "86.7vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <p style={{ marginBottom: "20px" , fontWeight : "bold" , fontSize : "25px" , color :"#b8bca5"}}>Whatever your feedback, we’d love to hear from you.</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%", maxWidth: "1200px" }}>
                <div style={{ width: "50%" }}>
                    <img src={contactPic} alt="Contact Us" style={{ maxHeight: "80vh" }} />
                </div>
                <div style={{ width: "50%" }}>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "400px" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ marginBottom: "10px", padding: "10px", backgroundColor: "black", borderRadius: "10px", height: "20px" , border: "1px solid #b8bca5" , color :"#b8bca5"}}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ marginBottom: "10px", padding: "10px", backgroundColor: "black", borderRadius: "10px", height: "20px" , border: "1px solid #b8bca5" , color :"#b8bca5"}}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ marginBottom: "10px", padding: "10px", backgroundColor: "black", borderRadius: "10px", height: "20px" ,border: "1px solid #b8bca5" , color :"#b8bca5"}}
                        />
                        <input
                            name="feedback"
                            placeholder="Feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            style={{ marginBottom: "10px", padding: "10px", backgroundColor: "black", borderRadius: "10px", height: "40px",border: "1px solid #b8bca5" , color :"#b8bca5"}}
                        />
                        <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "#b8bca5", cursor: "pointer", borderRadius: "10px" ,border: "1px solid #b8bca5"}}>Submit</button>
                    </form>
                </div>
            </div>
            <Modal title="Finalize Feedback" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
            footer = {[
                <Button key="ok" onClick={handleOk}>OK</Button>
            ]}>
                <p>Do you want to submit your feedback?</p>
            </Modal>
        </div>
    );
}


export default Contact;