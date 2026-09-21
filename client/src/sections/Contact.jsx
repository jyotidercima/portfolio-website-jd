import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';
import '../style/Contact.css'

function Contact() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({
        message: "",
        type: ""
    });

    // const [status, setStatus] = useState("All ok");


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        if (!formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()) {
            setStatus({
                message: "Please fill in all the fields.",
                type: "error"
            });
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            setStatus({
                message: "Please enter a valid email address.",
                type: "error"
            });
            return;
        }




        // if (!formData.name || !formData.email || !formData.message) {
        //     setStatus("Please fill in all the fields.");
        //     return;
        // }

        // if (!formData.email.includes("@")) {
        //     setStatus("Please enter a valid email address.")
        //     return;
        // }


        // Form passed validation

        console.log(formData);

        // setStatus("Thank you! Your message is ready to be sent.")

        setStatus({
            message: "Thank you! Your message is ready to be sent.",
            type: "success"
        })

        // console.log(formData);

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }





    return (
        <>
            <section id='contact' className="contact-section sections">
                <div className='form-container'>
                    <p>Get in Touch</p>

                    <h2>Let's work together</h2>

                    <p>Have a project or opportunity?
                        I'd love to hear from you.
                    </p>

                    <form action="" onSubmit={handleSubmit} className='main-form' noValidate>
                        <label htmlFor="name">Enter your good name:</label>
                        <input type="text" name="name" id="user-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        <label htmlFor="email">Your mail id:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        <label htmlFor="msg">Your message for me</label>
                        <textarea name="msg" id="msg" placeholder='Your message' rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required>

                        </textarea>

                        {/* {status && <p className='form-status'>{status}</p>} */}
                        {status.message &&
                            <p className={`form-status ${status.type}`}>
                                {status.message}
                            </p>}

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