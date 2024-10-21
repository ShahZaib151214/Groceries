import { ContactPic } from '../../assets/contact';
import ContactNavbar from './ContactNavbar';

import styles from './ContactUs.module.css';
import Footer from './Footer/Footer';

 
 


const ContactUs = () => {
    return (<>   
        <div className={styles.containerf}>
            <ContactNavbar/>
            <div className={styles.formContainer} style={{ background: `url(${ContactPic.contactbg}) no-repeat`, backgroundSize: 'cover' }}>
                <h2>Contact Us</h2>
                <p>TextFree is a mobile application and web service that allows users to send and receive text messages...</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter Your Name" />

                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id="email" placeholder="Enter Your Email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter Your Password" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder="Message..."></textarea>

                    <button type="submit" style={{width:'100%',height:'10vh',marginLeft:'0px', color:'white'}}>Submit <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                   </svg>
                        
                        </span></button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ContactUs;
