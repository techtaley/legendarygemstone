import React from 'react'

const faqData = [
    {
        question: "How do I place an order?",
        answer: "To place an order, simply browse our website and add the desired items to your shopping cart. Once you're ready to checkout, follow the prompts to enter your shipping and payment information to complete your purchase."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. You can find the available payment options during the checkout process."
    },
    {
        question: "Can I track my order?",
        answer: "Yes, once your order has been processed and shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to many countries worldwide. Shipping rates and delivery times may vary depending on the destination. Please refer to our shipping information for more details."
    },
    {
        question: "What is your return policy?",
        answer: "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return it within [number] days of receipt for a refund or exchange. Please review our return policy for eligibility criteria and instructions."
    },
    {
        question: "How can I contact customer support?",
        answer: "If you have any questions, concerns, or need assistance with your order, our customer support team is here to help. You can reach us via email at [email address] or through the contact form on our website. We strive to respond to all inquiries promptly."
    },
    {
        question: "Do you offer gift cards?",
        answer: "Yes, we offer gift cards that make the perfect gift for any occasion. Gift cards are available for purchase on our website and can be redeemed towards any product in our store."
    },
    {
        question: "Are your products ethically sourced?",
        answer: "We are committed to ethical sourcing and sustainability. We work closely with our suppliers to ensure that our products are produced under fair labor conditions and using environmentally friendly practices whenever possible."
    },
    {
        question: "How do I stay updated on new arrivals and promotions?",
        answer: "To stay informed about new arrivals, promotions, and exclusive offers, sign up for our newsletter or follow us on social media. You'll be the first to know about exciting updates and special deals."
    },
    {
        question: "Can I cancel or modify my order after it has been placed?",
        answer: "Once an order has been placed, it enters our processing system immediately to ensure prompt shipment. As a result, we may not be able to cancel or modify your order. However, please contact us as soon as possible, and we will do our best to accommodate your request."
    }
]

export default function FAQs() {
  return (
    <section className="margin70 defaults">
      <h2 className="center darkfont">Frequently Asked Questions (FAQs)</h2>

      <ol>
        {faqData.map(faq =>        
        <li><span className="bold">{faq.question}</span>
            <p>{faq.answer}</p>
        </li>
        )}
      </ol>

    </section>  






        
  )
}
