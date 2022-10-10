import Image from "next/image";
import rafiki from "../../../public/assets/rafiki.png";
import config from "../../config.json";

const faqs = [
  {
    id: "one",
    question: "Who is Cobalt?",
    answer: `Cobalt is an online peer-to-peer money transfer platform that allows users to send and receive money from their mobile devices through a linked bank account. We match buyers and sellers of different currencies to deliver a competitive exchange rate.`,
  },
  {
    id: "two",
    question: "How does Cobalt transfer work",
    answer: `With Cobalt’s transfer, users can quickly send funds while keeping their bank account details private. All that’s required to send a payment is the recipient’s bank account details (email address or phone number). The marketplace matches you with other customers who want to buy the currency you are selling at the rate you have chosen.  If you’re not in a rush to exchange, simply set your rate, and wait for a match.

    For example; Ayo has $1000 and he wants the Naira equivalence in his Nigerian bank account. He’ll either send at Cobalt’s exchange rate and gets the equivalence remitted into his Naira bank account immediately or set his own exchange rate for the swap on Cobalt’s marketplace.`,
  },
  {
    id: "four",
    question: "Why choose your own exchange rate?",
    answer: `By choosing your own exchange rate on our secure peer-to-peer marketplace, you could even beat the FX rate available at that time in the currency markets, meaning more money in your pocket.`,
  },
  {
    id: "five",
    question: "How long does it take to arrive at my beneficiary?",
    answer: `Cobalt gets your funds to the chosen beneficiary typically a lot faster than using a high street bank or brokers. Once you have agreed on a rate, the funds are exchanged and forwarded to the stipulated beneficiary account.`,
  },
  {
    id: "six",
    question: "Does Cobaltswap have an App?",
    answer: `No, Cobaltswap is currently a web-based platform. Nonetheless, the website is optimized for mobile use.`,
  },
  {
    id: "seven",
    question: "Do I need a virtual card?",
    answer: `At the moment, all transactions can be carried out on our website, which has a user-friendly interface that is easy to navigate. In the future, Cobalt will have a mobile app that can be used to access your account.`,
  },
  {
    id: "eight",
    question: "How can I contact Cobalt?",
    answer: `We are happy to answer any of your questions and inquiries 24/7. Please feel free to contact us via mail at contact@cobaltswap.com or give us a call at ${config.contact.mobilePhone} and be assured of a prompt response. Your concern is our concern.`,
  },
  {
    id: "nine",
    question: "What if I don’t want to set my own rate?",
    answer: `No problem. Just use the ‘Best rate available now’ option. An exchange will take place immediately at the best rate available in the marketplace at that time.`,
  },
  {
    id: "ten",
    question: "Who can use the Peer-to-Peer Foreign Exchange service?",
    answer: `Anyone with a need to send funds overseas can use the currency matching service.`,
  },
];

function FAQ() {
  return (
    <section id="faq" className="landing-page-faq mb-5 py-5">
      <div className="container px-4 px-md-5 py-2">
        <div className="row align-items-md-center">
          <div className="faqs col-12 col-md-7 col-lg-6">
            <header className="mb-3 mb-md-5 fw-700 h1">Your questions, answered</header>
            <div className="accordion accordion-flush fs-4" id="faqAccordion">
              {faqs.length &&
                faqs.map((faq, key) => (
                  <div className="accordion-item" key={key}>
                    <p className="accordion-header" id={`faq-header-${faq?.id}`}>
                      <button
                        className="accordion-button collapsed fs-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq?.id}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faq?.id}`}
                      >
                        {faq?.question}
                      </button>
                    </p>
                    <div
                      id={faq?.id}
                      className="accordion-collapse collapse"
                      aria-labelledby={`faq-header-${faq?.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq?.answer}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="faq-illustration col-12 col-md-5 col-lg-6 d-none d-sm-block">
            <Image src={rafiki} alt="rafiki" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
