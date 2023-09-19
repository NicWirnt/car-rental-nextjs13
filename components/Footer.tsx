import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__link-container">
        <div className="footer__copyrights">
          <a href="/" className="footer__copyrights-links">
            Copyrights ©️©️
          </a>
        </div>
        <div className="footer__links">
          <Image src="facebook.svg" width={25} height={10} alt="Facebook" />
          <Image src="twitter.svg" width={25} height={10} alt="twitter" />
          <Image src="linkedin.svg" width={25} height={10} alt="linkedin" />
          <Image src="github.svg" width={25} height={10} alt="github" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
