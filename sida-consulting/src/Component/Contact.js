import phoneicon from "../Assets/img/icons8-phone-30.png";
import emailicon from "../Assets/img/icons8-email-30.png";
import officeicon from "../Assets/img/icons8-office-30.png";
import logo from '../Assets/img/SIDA-LOGO.png';
import pic1 from '../Assets/img/Sida-const-pic-1.jpg';
import pic2 from '../Assets/img/Sida-const-pic-3.jpg';
import pic3 from '../Assets/img/Sida-const-pic-4.jpg';

export const Contact = () => {
    return (
        <section class="contact" id="contact">
            <h4 class="company-name">SIDA CONSULTING & PROJECT MANAGEMENT</h4>
            <h1 class="title-contact col-4">Contact Us</h1>
            <div className="pics col-12">
                <img src={pic1} className="col-xs-4 col-sm-4 col-md-4 col-lg-4" alt="company-pc" />
                <img src={pic2} className="col-xs-4 col-sm-4 col-md-4 col-lg-4" alt="company-pc" />
                <img src={pic3} className="col-xs-4 col-sm-4 col-md-4 col-lg-4" alt="company-pc" />

            </div>
            <h4 class="Contact-form col-4" id="contact-form">CONTACT FORM<hr /></h4>
            <div className="row" id="input-boxes">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                    <label className="col-1">Full Name</label><br />
                    <input type="text" className="col-12 field" placeholder="Enter your name" required />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                    <label className="col-1">Phone Number</label><br />
                    <input type="number" className="col-12 field" placeholder="Enter your number" required />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box">
                    <label className="col-1">Email</label><br />
                    <input type="email" className="col-12 field" placeholder="Enter your email" required />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box" id="text-area1">
                    <label className="col-1">Message</label><br />
                    <textarea name="" id="" className="col-12 field message" placeholder="Enter your message" required />
                </div>
                <button type="Submit" className="col-4">Submit</button>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={ phoneicon } alt="phone-icon" />
                    <label>PHONE</label>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={ emailicon } alt="phone-icon" />
                    <label>EMAIL</label>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={ officeicon } alt="phone-icon" />
                    <label>OFFICE</label>
                </div>
                <hr />
                <div className="col-4">
                    <label>012 004 1271</label>
                </div>
                <div className="col-4">
                    <label>johnr@sidaconsulting.com</label>
                </div>
                <div className="col-4">
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