const SkillItem = ({ name, src }) => {
  return (
    <div className="skill-item">
      <img className="skill-img" src={src} alt={name} />
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default SkillItem;
