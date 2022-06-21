import s from '../../../styles/main.module.scss';

type Faq = {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  { 
    question: '', 
    answer: '',
  },
  { 
    question: '', 
    answer: '',
  },
];

const FAQ = (): JSX.Element => 
  <div className={s.Schedule}>
    {faqs.map(faq => 
      <div className={s.Day}>
        <h1>{faq.question}</h1>
        <div>
          {faq.answer}
        </div>
      </div>
    )}
  </div>;

export default FAQ;
