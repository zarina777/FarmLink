import { useState } from "react";
import style from "./style.module.scss";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Question 1. Can physical people use your platform as a customer?",
      answer: "Answer. Yes, they can ",
    },
    {
      question:
        "Question 2. What if we pay for the product you serve but farmer do not respond for long time and we cannot get the product on our hand?",
      answer:
        "Answer. We will not transfer your money to the farmer until the product is on your hand. However we coorporate only with reliable farmers whom we look into credibility and test",
    },
    {
      question:
        "Question 3. Can you give us some information on how you solve logistic issue? ",
      answer:
        "Answer. As a farmer, you will not have an issue with logistics as far as customers come your home or farm on their own, and take the products on their cost",
    },
    {
      question:
        "Question 4. If the product does not satisfy me, can i get my money back? And what shall i do for that?",
      answer:
        "Answer. Yes, you can get your money. Just call the administrator and state your case and your money will be sent to you within some minutes",
    },
    {
      question:
        "Question 5. Can you explain why you take the deposit from farmers' product they want to sell in your platform",
      answer:
        "Answer. In case of no deletion of product from platform, which they sold in offline version, but customer already relies on the product and paid the fee but knowing the product is sold and looses interest. In this case deposite will not be returned to the farmer.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={style.faq}>
      <h1>FAQ</h1>
      <div className={style.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={style.faqItem}>
            <div className={style.question} onClick={() => toggleAnswer(index)}>
              <h4>{faq.question}</h4>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className={style.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
