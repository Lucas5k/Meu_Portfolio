import { ContainerContact, WrapperInputs } from '../Styled/StyledPage';
import '../Styled/Navbar.css';
import '../Styled/Contact.css';
import HeaderPage from '../Components/HeaderPage';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';

function ContactPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);


  const isDisabled = btnDisabled === true ? 'buttonDesabled' : 'buttonActive';

  useEffect(() => {
    const pattern = /\S+@\S+\.\S+/;
    const typeString = typeof fullname === 'string';

    if (
      email.length > 3 && pattern.test(email) &&
      fullname.length > 3 && typeString &&
      subject.length > 12 && typeString &&
      message.length > 20 && typeString
    ) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }

  }, [email, fullname, subject, message, btnDisabled])

  const handleSubmit = () => {
    const templatePrams = {
      from_subject: subject,
      from_name: fullname,
      message: message,
      email: email
    }

    emailjs.send(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      templatePrams,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((response) => {
      console.log(response.status)
      setFullname('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, (err) => {
      console.log("Erro: ", err)
    })
  }

  return (
    <form>
      <HeaderPage />
      <ContainerContact>
        <WrapperInputs>
          <h1>Contact me</h1>
          <label htmlFor="fullname-input">
            <input
              id="fullname-input"
              type="text"
              placeholder="Fullname"
              value={ fullname }
              onChange={ ({ target }) => setFullname(target.value) }
            />
          </label>
          <label htmlFor="email-input">
            <input
              id="email-input"
              placeholder="Email"
              type="text"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label htmlFor="subject-input">
            <input
              id="subject-input"
              type="text"
              placeholder="Subject"
              value={ subject }
              onChange={ ({ target }) => setSubject(target.value) }
            />
          </label>
          <label htmlFor="message-input">
            <textarea
              id="message-input"
              type="text"
              placeholder="Message"
              maxLength="186"
              value={ message }
              onChange={ ({ target }) => setMessage(target.value) }
            />
          </label>
          <button
            type="button"
            className={ isDisabled }
            onClick={ handleSubmit }
            disabled={ btnDisabled }
          >
            Submit
          </button>
        </WrapperInputs>
      </ContainerContact>
      <Footer />
    </form>
  );
}

export default ContactPage
