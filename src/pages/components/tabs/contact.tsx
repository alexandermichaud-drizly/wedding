import classNames from 'classnames';
import * as React from 'react';
import s from '../../../styles/main.module.scss';

const alexanderEmail = 'alexander.michaud@aya.yale.edu';
const andreaEmail = 'andrea.c.zurita11@gmail.com';
const mailToLink = (email: string): JSX.Element => (
  <a href={`mailto:${email}?subject=Question About the Wedding`}>{email}</a>
);

const Contact = (): JSX.Element => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className={s.ContactInfo}>
        <div>
          If you have any questions about the wedding, please feel free to reach
          out by email, call, or Whatsapp.
        </div>
        <div className={classNames(s.Contact, s.Name)}>Andrea</div>
        <div>+1 (305) 336-3092 | {mailToLink(andreaEmail)}</div>
        <div className={classNames(s.Contact, s.Name)}>Alexander</div>
        <div>+1 (603) 398-0413 | {mailToLink(alexanderEmail)} </div>
      </div>
    </div>
  );
};

export default Contact;
