const Hero = () => {
  return (
    <div className="full-page hero light no-select" id="hero">
      <div className="hero-container">
        <div className="corner-piece border-top border-left"></div>
        <div className="corner-piece border-top border-right"></div>
        <div className="corner-piece border-bottom border-left"></div>
        <div className="corner-piece border-bottom border-right"></div>

        <div className="container-section first">
          <div className="eye-catcher">
            I turn
            <br />
            ideas into
            <br />
            <span>Reality.</span>
          </div>
        </div>

        <div className="container-section second">
          <div className="name">Petar Mijailovic</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
