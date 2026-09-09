import { useState } from 'react';

// import './Contact.css'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })



    return (
        <>
            <section id='contact' className="contact-section sections">
                <div className="contact-container">
                    <p>Get in Touch</p>

                    <h3>Let's work together</h3>

                    <p>Have a project or opportunity?
                        I'd love to hear from you
                    </p>

                    <div className='form-contact'>
                        <form action="" className='main-form'>
                            <label htmlFor="name">Enter your good name:</label>
                            <input type="text" name="name" id="user-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <label htmlFor="email">Enter your mail id:</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <textarea name="msg" id="msg" placeholder='Enter your message'>

                            </textarea>

                            <button type='submit'>SEND</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact