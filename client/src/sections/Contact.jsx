import.meta.env
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import SocialLinks from '../components/SocialLinks';
import '../style/Contact.css'

function Contact() {

    // console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID)
    // console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    // console.log("Public KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({
        message: "",
        type: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [IsSent, setIsSent] = useState(false);

    // const [status, setStatus] = useState("All ok");


    const handleSubmit = async (e) => {
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
        setIsSent(false);
        setIsSending(true);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log("Email sent ", result)

            setIsSent(true);

            setStatus({
                message: "Thank you! Your message is ready to be sent.",
                type: "success"
            });

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        }
        catch (error) {
            console.error("Email sending failed: ", error);

            setStatus({
                message: "Something went wrong. Please try agian.",
                type: "error"
            });
        }
        finally {
            setIsSending(false);

        }

        // console.log("Email sent: ", result);

        // setStatus({
        //     message: "Thank you! Your message is ready to be sent.",
        //     type: "success"
        // })

        // console.log(formData);

        // setFormData({
        //     name: "",
        //     email: "",
        //     message: ""
        // })
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
                        <input type="text" name="name" id="user-name" value={formData.name} onChange={(e) => { setIsSent(false); setFormData({ ...formData, name: e.target.value }) }} required />
                        <label htmlFor="email">Your mail id:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={(e) => { setIsSent(false); setFormData({ ...formData, email: e.target.value }) }} required />
                        <label htmlFor="msg">Your message for me</label>
                        <textarea name="msg" id="msg" placeholder='Your message' rows="5" value={formData.message} onChange={(e) => { setIsSent(false); setFormData({ ...formData, message: e.target.value }) }} required>

                        </textarea>

                        {/* {status && <p className='form-status'>{status}</p>} */}
                        {status.message &&
                            <p className={`form-status ${status.type}`}>
                                {status.message}
                            </p>}

                        <button type='submit' disabled={isSending}>
                            {isSending ? "Sending.." : IsSent ? "Sent" : "Send"}
                        </button>
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