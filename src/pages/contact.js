import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Get in touch...</h1>

        <form
            className="contact"
            action="https://formspree.io/xvoarpvq"
            method="POST"
        >
            <div className="contact__group shadow">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required autoFocus />
                <label htmlFor="email">Email</label>
                <input type="email" name="_replyto" id="email" required />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="contact__message"
                    required
                ></textarea>

                <button
                    className="blog__entry__link contact__submit"
                    type="submit"
                    value="Send"
                >
                    Send
                </button>
            </div>
        </form>
    </Layout>
);

export default ContactPage;
