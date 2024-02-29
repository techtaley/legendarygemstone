import { Link } from "react-router-dom"
import "./../styles/main/main.css";

export default function Terms() {
  return (
    <section className="margin70 defaults">
      <h2 className="center darkfont">Terms and Conditions</h2>

        <p>Please read these terms and conditions ("terms", "terms and conditions") carefully before using the My Strapi Shop website (the "service") operated by My Strapi Shop ("us", "we", or "our").</p>

        <p>Your access to and use of the service is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users, and others who access or use the service.</p>

        <p>By accessing or using the service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.</p>

        <h3>Purchases</h3>

        <p>If you wish to purchase any product or service made available through the service ("purchase"), you may be asked to supply certain information relevant to your purchase including, without limitation, your name, address, payment information, and shipping information.</p>

        <h3>Subscriptions</h3>

        <p>Some parts of the service are billed on a subscription basis ("subscription(s)"). You will be billed in advance on a recurring and periodic basis ("billing cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a subscription.</p>

        <h3>Content</h3>

        <p>Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("content"). You are responsible for the content that you post on or through the service, including its legality, reliability, and appropriateness.</p>

        <h3>Changes</h3>

        <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h3>Contact Us</h3>

        <p>If you have any questions about these terms and conditions, please contact us:</p><br />

        <p><span className="bold">By email:</span> mystrapishop@email.com</p>
        <p><span className="bold">By visiting this page on our website:</span> <Link className="footer-link" to="https://my-strapi-shop.techtaleyportfolio.com/contact">https://my-strapi-shop.techtaleyportfolio.com/contact</Link></p>
        <p><span className="bold">Last updated:</span> February 27, 2024</p>          

    </section>
  )
}
