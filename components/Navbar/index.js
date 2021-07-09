import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import companyLogo from "../../public/company_logo.png";

export default function Navbar() {
  const [style, setStyle] = useState({
    navbarChild: "",
  });

  const handleScroll = (e) => {
    if (window.scrollY > 56) {
      setStyle((prevState) => ({
        ...prevState,
        navbarChild: styles.navigationContainer,
      }));
    } else if (window.scrollY < 56) {
      setStyle((prevState) => ({
        ...prevState,
        navbarChild: styles.navigation,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar}`}>
      <nav className={`navbar navbar-expand-lg ${style.navbarChild}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={companyLogo} width={160} height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                "HOME",
                "ABOUT US",
                "SPECILISED SERVICES",
                "TESTING SERVICES",
                "CASE STUDIES",
                "CONTACT",
              ].map((value, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
