import React from 'react';

function Contact() {



    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="section-title text-center mb-4">Contact Me</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const name = document.getElementById("name").value;
                        const email = document.getElementById("email").value;
                        const message = document.getElementById("message").value;

                        const smsText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
                        const smsBody = encodeURIComponent(smsText);
                        window.location.href = `sms:8872869920?body=${smsBody}`; // replace 1234567890 with your number
                    }}
                >
                    <div className="mb-3">
                        <label htmlFor="name" >Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" >Your Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" >Your Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Write your message here" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send SMS</button>
                </form>

            </div>
        </section>

    );
}

export default Contact;