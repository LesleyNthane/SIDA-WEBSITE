import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import phoneicon from "../Assets/img/icons8-phone-30.png";
import emailicon from "../Assets/img/icons8-email-30.png";
import officeicon from "../Assets/img/icons8-office-30.png";
import logo from '../Assets/img/SIDA-LOGO.png';
import pic1 from '../Assets/img/Sida-const-pic-1.jpg';
import pic2 from '../Assets/img/Sida-const-pic-3.jpg';
import pic3 from '../Assets/img/Sida-const-pic-4.jpg';

export const Contact = () => {

    const formInitialDetails = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2e339ec8-3fec-476e-94db-b4f9fa2fc861");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        setFormDetails(formInitialDetails);

        if (res.success) {
          console.log("Success", res);
          setStatus({ success: true, message: 'Message sent successfully' });
        }else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      };


    return (
        <section class="contact" id="contact">
            <h4 class="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
            <h1 class="title-contact col-4">Contact Us</h1>
            <div className="pics col-12">
                <img src={pic1} className="col-4" alt="Construction picture" />
                <img src={pic2} className="col-4" alt="Construction picture" />
                <img src={pic3} className="col-4" alt="Construction picture" />
            </div>
            <h4 class="Contact-form col-4" id="contact-form">CONTACT FORM<hr /></h4>
            <form onSubmit={onSubmit}>
                <div className="row" id="input-boxes">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                        <label className="col-1">Full Name</label><br />
                        <input type="text" name="fullName" value={formDetails.firstName} className="col-12 field" placeholder="Enter your name" onChange={(e) => onFormUpdate('fullName', e.target.value)} required />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                        <label className="col-1">Phone Number</label><br />
                        <input type="tel" value={formDetails.phone} className="col-12 field" placeholder="Enter your number" onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                        <label className="col-1">Email</label><br />
                        <input type="email" name="email" value={formDetails.email} className="col-12 field" placeholder="Enter your email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box" id="text-area1">
                        <label className="col-1">Message</label><br />
                        <textarea name="message" id="" value={formDetails.message} className="col-12 field message" placeholder="Enter your message" onChange={(e) => onFormUpdate('message', e.target.value)} required />
                    </div>
                    <button type="Submit" className="col-4">Submit</button>
                    {
                        status.message &&
                        <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                </div>
            </form>
            <div className="row" id="bottom-div">
                <div className="col-4">
                    <img src={ phoneicon } alt="phone-icon" />
                    <label>PHONE</label>
                </div>
                <div className="col-4">
                    <img src={ emailicon } alt="phone-icon" />
                    <label>EMAIL</label>
                </div>
                <div className="col-4">
                    <img src={ officeicon } alt="phone-icon" />
                    <label>OFFICE</label>
                </div>
                <hr />
                <div className="col-4 info1">
                    <label>012 004 1271</label>
                </div>
                <div className="col-4 info1">
                    <label>johnr@sidaconsulting.com</label>
                </div>
                <div className="col-4 info1">
                    <label>Office suite 4b, futurum office park <br />251 lenchen avenue <br />Centurion , 0157</label>
                </div>
                <div className="col-3">
                    <img src={logo} alt="logo" />
                </div>
                <p className="copyrights">Copy rights reserved. Designed & Developed by L Nthane 2024</p>
                <div className="col-12 bottomn">
                    <p>SIDA CONSULTING AND PROJECT MANAGEMENT (PTY) LTD 2012/017803/07</p>
                </div>
            </div>
        </section>
    )
}