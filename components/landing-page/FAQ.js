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
    <section id="landing-page-faq" className="mb-5 py-5">
      <div className="container">
        <div className="d-flex">
          <div className="faqs col-12 col-md-7">
            <h2 className="mb-3 mb-md-4 fw-bold text-primary-local">Your questions, answered</h2>
            <div class="accordion accordion-flush" id="faqAccordion">
              {faqs.length &&
                faqs.map((faq, key) => (
                  <>
                    <div class="accordion-item" key={key}>
                      <h2 class="accordion-header" id={`faq-header-${faq?.id}`}>
                        <button
                          class="accordion-button collapsed"
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
                        class="accordion-collapse collapse"
                        aria-labelledby={`faq-header-${faq?.id}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">{faq?.answer}</div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="faq-illustration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
