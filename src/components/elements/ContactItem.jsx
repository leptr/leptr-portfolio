const ContactItem = ({ type, info, isEmail }) => {
  const url = type === isEmail ? `mailto:${info}` : info;
  return (
    <div className="contact-item">
      <span className="contact-type">{type}:</span>
      <a target="_blank" rel="noopener noreferrer" href={url} className="contact-info">
        {info}
      </a>
    </div>
  );
};

export default ContactItem;
