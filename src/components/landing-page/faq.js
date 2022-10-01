import Image from "next/image";
import rafiki from "../../../public/assets/rafiki.png";

const faqs = [
  {
    id: "one",
    question: "What is Cobalt?",
    answer: `Cobalt puts you in control of your foreign exchange rates and helps you receive and send money across border. It's that simple.`,
  },
  {
    id: "two",
    question: "Why Use Cobalt?",
    answer: `With Cobalt you can send Naira to Nigeria from over 40 countries worldwide, directly into your beneficiary's account. Simple to send, stress-free to receive.`,
  },
  {
    id: "three",
    question: "How Does Cobalt work?",
    answer: `With Cobalt you can send Naira to Nigeria from over 40 countries worldwide, directly into your beneficiary's account. Simple to send, stress-free to receive.`,
  },
  {
    id: "four",
    question: "Does Cobalt have a mobile app?",
    answer: `No Cobalt does not have a mobile app yet. Nonetheless, Cobalt has solutions to your FX problems.`,
  },
  {
    id: "five",
    question: "Does Cobalt have a mobile app?",
    answer: `No Cobalt does not have a mobile app yet. Nonetheless, Cobalt has solutions to your FX problems.`,
  },
  {
    id: "six",
    question: "Does Cobalt have a mobile app?",
    answer: `No Cobalt does not have a mobile app yet. Nonetheless, Cobalt has solutions to your FX problems.`,
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
