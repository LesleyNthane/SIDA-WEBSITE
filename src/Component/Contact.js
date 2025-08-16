import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import phoneicon from "../Assets/img/icons8-phone-30.png";
import emailicon from "../Assets/img/icons8-email-30.png";
import officeicon from "../Assets/img/icons8-office-30.png";
import logo from '../Assets/img/SIDA-LOGO.png';
import pic1 from '../Assets/img/Sida-const-pic-1.jpg';
import pic2 from '../Assets/img/Sida-const-pic-3.jpg';
import pic3 from '../Assets/img/Sida-const-pic-4.jpg';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building2,
  Users,
  FileText 
} from "lucide-react";

export const Contact = () => {

    const formInitialDetails = {
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    //const [status, setStatus] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ success: false, message: "" });

    const contactInfo = [
        {
        icon: MapPin,
        title: "Our Location",
        details: ["Office suite 4b, futurum office park", "251 lenchen avenue", "Centurion , 0157"]
        },
        {
        icon: Phone,
        title: "Phone Numbers",
        details: ["+27 (12) 004 1271", "+27 (12) 004 1274",  " "]
        },
        {
        icon: Send,
        title: "Email Addresses",
        details: ["info@sidaconsulting.com"]
        },
        {
        icon: Clock,
        title: "Business Hours",
        details: ["Monday - Thursday: 8:00 AM - 5:00 PM", "Friday: 8:00 AM - 4:00 PM", "Saturday-Sunday: Emergency Only"]
        }
    ];

    const departments = [
        {
        icon: Building2,
        title: "Project Inquiries",
        email: "info@sidaconsulting.com",
        description: "General construction and development projects"
        },
        {
        icon: FileText,
        title: "Tender Submissions",
        email: "info@sidaconsulting.com",
        description: "Tender opportunities and bid submissions"
        },
        {
        icon: Users,
        title: "Partnerships",
        email: "info@sidaconsulting.com",
        description: "Strategic partnerships and collaborations"
        }
    ];

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.REACT_APP_WEB3FORM_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
            });

            const data = await res.json();

            if (data.success) {
            setStatus({ success: true, message: "Message sent successfully." });
            event.target.reset();
            } else {
            setStatus({ success: false, message: "Something went wrong. Please try again." });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus({ success: false, message: "Network error. Please try again later." });
        } finally {
            setLoading(false);
        }
    };


    return (
        <section class="contact" id="contact">
            <h4 class="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
            <h1 class="title-contact col-4">Contact Us</h1>
            <div className="pics col-11.4">
                <img src={pic1} className="col-4" alt="Construction picture" />
                <img src={pic2} className="col-4" alt="Construction picture" />
                <img src={pic3} className="col-4" alt="Construction picture" />
            </div>
            <h4 class="Contact-form col-4" id="contact-form">CONTACT FORM<hr /></h4>
            <div className="row" id="contact-info">
                <form className="contact-form col-xs-12 col-sm-12 col-md-6 col-lg-6" onSubmit={onSubmit}>
                    <div className="row" id="input-boxes">
                        <h3 className="contact-head3">Send Us a Message...</h3>
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
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                            <label className="col-1">Company</label><br />
                            <input type="text" name="company" value={formDetails.company} className="col-12 field" placeholder="Enter your company name" onChange={(e) => onFormUpdate('company', e.target.value)} required />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-box" id="text-area1">
                            <label className="col-1">Message</label><br />
                            <textarea name="message" id="textarea-message" value={formDetails.message} className="col-12 field message" placeholder="Enter your message" onChange={(e) => onFormUpdate('message', e.target.value)} required />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Submit-button">
                            <button type="Submit" className="button-submit">Submit</button>
                        </div>
                        {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                    </div>
                </form>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 contact-info-sec">
                    <h4 className="col-12">Contact Information</h4>
                    <div className="row contact-items">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-item col-xs-20 col-sm-20 col-md-5 col-lg-5">
                                <div className="icon-head-contact">
                                    <info.icon className="h-8 w-8 contact-icon" />
                                    <h5 className="head2-contact">  {info.title}</h5>
                                </div>
                                <ul>
                                    {info.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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
                    <label>info@sidaconsulting.com</label>
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