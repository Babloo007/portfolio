import React from "react";
import saivenkat from "../../assets/sai_venkata_reddy_mallela.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={saivenkat} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;