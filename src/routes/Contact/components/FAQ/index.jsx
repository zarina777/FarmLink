import { useState } from 'react';
import './style.module.scss'; // Adjust the import based on your structure

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'questio1?',
      answer: 'answer1.',
    },
    {
      question: 'questio2?',
      answer: 'answer2.',
    },
    {
      question: 'questio1?',
      answer: 'Yes, we ship to many countries worldwide. Check our shipping policy for details.',
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can reach customer service via email at support@example.com or call us at (123) 456-7890.',
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faqList">
        {faqs.map((faq, index) => (
          <div key={index} className="faqItem">
            <div className="question" onClick={() => toggleAnswer(index)}>
              <h4>{faq.question}</h4>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <p className="answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
