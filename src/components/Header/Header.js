import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="The F2E logo" className="nav__logo" />
        <a
          href="https://2022.thef2e.com/login"
          className="nav__link nav__link--desktop"
        >
          立即報名
        </a>
      </nav>
      <a
        href="https://2022.thef2e.com/login"
        className="nav__link nav__link--mobile"
      >
        立即報名
      </a>
    </>
  );
}
