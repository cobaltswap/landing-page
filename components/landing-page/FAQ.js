import Image from "next/image";
import rafiki from "../../public/assets/rafiki.png";

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
];

function FAQ() {
  return (
    <section id="faq" className="landing-page-faq mb-5 py-5">
      <div className="container">
        <div className="d-flex">
          <div className="faqs col-12 col-md-7">
            <h2 className="mb-3 mb-md-4 fw-bold text-primary-local">Your questions, answered</h2>
            <div className="accordion accordion-flush" id="faqAccordion">
              {faqs.length &&
                faqs.map((faq, key) => (
                  <div className="accordion-item" key={key}>
                    <h2 className="accordion-header" id={`faq-header-${faq?.id}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq?.id}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faq?.id}`}
                      >
                        {faq?.question}
                      </button>
                    </h2>
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
          <div className="faq-illustration">
            <Image src={rafiki} alt="rafiki" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
