import React from "react";
import resume from "../../assets/cv.pdf";

const link = () => {
  return (
    <div className="link">
      <a
        href="https://drive.google.com/drive/folders/19ZTsvvWacy5qbRs6HwiwqCnliW7JNvh-?usp=sharing"
        download
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default link;
