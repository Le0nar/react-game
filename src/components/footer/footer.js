import React from "react";
import "./footer.scss";
import iconSrc from "../../images/rs_school_js.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-author">
          <span>by</span>
          <a
            href="https://github.com/YaroslavTrefilov"
            className="footer__link"
          >
            Yaroslav Trefilov
          </a>
          <span>2021</span>
        </div>
        <a href="https://rs.school/js/" className="footer-rsschool">
          <img
            src={iconSrc}
            alt="rs school"
            className="footer-rsschool__img"
          />
          <span className="footer-rsschool__link footer__link">RS School</span>
        </a>
      </footer>
    );
  }
}

export default Footer;
