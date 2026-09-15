import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';
import '../style/Contact.css'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });





    return (
        <>
            <section id='contact' className="contact-section sections">
                <div className='form-container'>
                    <p>Get in Touch</p>

                    <h2>Let's work together</h2>

                    <p>Have a project or opportunity?
                        I'd love to hear from you.
                    </p>

                    <form action="" className='main-form'>
                        <label htmlFor="name">Enter your good name:</label>
                        <input type="text" name="name" id="user-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <label htmlFor="email">Your mail id:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <label htmlFor="msg">Your message for me</label>
                        <textarea name="msg" id="msg" placeholder='Your message' rows="5" value={formData.message} onChange={(e) => setFormData({ ...FormData, message: e.target.value })}>

                        </textarea>

                        <button type='submit'>SEND</button>
                    </form>
                </div>
                <div className="social-contact">
                    <SocialLinks />
                </div>



            </section>
        </>
    )
}

export default Contact