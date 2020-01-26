//@flow
import * as React from 'react';
import ContentSection from '../../section/ContentSection';
import ContactIcons from './ContactIcons';

const useState = React.useState;
const socialMediaItems = [
  { icon: 'facebook-official', link: 'https://www.facebook.com/darek.gala', alt: 'Facebook' },
  { icon: 'linkedin-squared', link: 'https://www.linkedin.com/in/dariusz-gala/', alt: 'Linkedin' },
  { icon: 'reddit', link: 'https://www.reddit.com/user/DaroOCK', alt: 'Reddit' },
  { icon: 'twitter', link: 'https://twitter.com/d_gala65', alt: 'Twitter' },
  { icon: 'instagram', link: 'https://www.instagram.com/d.gala65/', alt: 'Instagram' },
];
const devItems = [
  { icon: 'github-circled', link: 'https://github.com/DariuszGala', alt: 'Github' },
  { icon: 'bitbucket', link: 'https://bitbucket.org/%7Bc65a4da4-9a1b-4319-8f6a-0f1997dfad1b%7D/', alt: 'Bitbucket' },
  { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/6842519/darek-gala', alt: 'StackOverflow' },
];

export const ContactPage = (): React.Node => {
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  function handleSubjectChange({target}) {
    return setSubject(target.value);
  }

  function handleMessageChange({target}) {
    return setMessage(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailSubject = subject ? `subject=${subject}` : '';
    const emailMessage = message ? `body=${message}` : '';

    window.open(
      `mailto:dariusz.gala@hotmail.com?${emailSubject}&${emailMessage}`
    );
  }

  return (
    <ContentSection title="Contact">
      <div className="row mt-4">
        <div className="col-12 col-md-6 mb-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="email">From</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="email">To</label>
                <input type="reciever" disabled className="form-control" id="email" value="dariusz.gala@hotmail.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" onChange={handleSubjectChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                style={{ resize: 'none' }}
                className="form-control"
                id="message"
                rows={10}
                onChange={handleMessageChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-dark">Send</button>
          </form>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="h-100 dg-contact">
            <ContactIcons title="Social media" items={socialMediaItems} className="mb-3 mb-md-5" />
            <ContactIcons title="Dev sites" items={devItems} className="mb-3" />
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default ContactPage;
