import avtar from "../Assets/img/avataaars.svg";
import cv from "../Assets/resume.pdf"; // Update the path to your CV

function Masthead() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img className="masthead-avatar mb-5" src={avtar} alt="..." />
        {/* <!-- Masthead Heading--> */}
        <h1 className="masthead-heading text-uppercase mb-0">MARVIN POCON</h1>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Masthead Subheading--> */}
        <p className="masthead-subheading font-weight-light mb-0">BSCS - 4TH YEAR</p>
        {/* <!-- Download CV Button --> */}
        <a href={cv} download className="btn btn-light mt-4">
          My Resume
        </a>
      </div>
    </header>
  );
}

export default Masthead;