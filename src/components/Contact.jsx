import ContactItem from "./elements/ContactItem";

const Contact = () => {
  return (
    <div className="full-page contact dark" id="contact">
      <div className="section-title no-select">Contact me</div>
      <div className="sub-container">
        <div className="contact-container">
          <div className="section-text">Wish to reach out? Here are all the ways you can contact me:</div>
          <ContactItem type="Email" info="petar.mijailovic2000@gmail.com" isEmail={true} />
          <ContactItem type="GitHub" info="https://github.com/leptr" />
          <ContactItem type="YouTube" info="https://www.youtube.com/@ptr_dev" />
          <ContactItem type="LinkedIn" info="https://www.linkedin.com/in/petar-mijailović-310a28184/" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
