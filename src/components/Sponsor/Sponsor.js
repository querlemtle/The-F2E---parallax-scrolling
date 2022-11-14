import "./Sponsor.css";
import blockStudioLogo from "../../assets/blockstudio-logo-white.png";
import titanLogo from "../../assets/titan-logo-white.png";
import kdanLogo from "../../assets/kdan-logo-white.png";

export default function Sponsor() {
  return (
    <section className="sponsor">
      <h3 className="sponsor__title">贊助單位</h3>
      <img
        className="sponsor__logo"
        src={blockStudioLogo}
        alt="Block-studio-logo"
      />
      <img className="sponsor__logo" src={titanLogo} alt="Titan-logo" />
      <img className="sponsor__logo" src={kdanLogo} alt="Kdan-logo" />
    </section>
  );
}
