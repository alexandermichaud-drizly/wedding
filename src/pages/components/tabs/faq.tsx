import s from '../../../styles/tabbed_content.module.scss';

type FAQ = {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [];

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
