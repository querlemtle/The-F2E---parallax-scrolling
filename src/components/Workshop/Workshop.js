import portraitPlaceholder from "../../assets/portrait-placeholder.png";
import "./Workshop.css";

export default function Workshop() {
  return (
    <section className="workshop">
      <h2 className="workshop__title">各界大神接力分享</h2>
      <div className="workshop__card">
        <img
          src={portraitPlaceholder}
          alt="Portrait"
          className="workshop__portrait"
        />
        <h3 className="workshop__card-name">網站的動態趨勢</h3>
        <h4 className="workshop__card-date">11/3（四）20:30～21:30</h4>
        <h4 className="workshop__card-host">李明</h4>
        <p className="workshop__card-content">版塊設計創辦人兼創意總監</p>
        <p className="workshop__card-price">免費公開課</p>
      </div>
    </section>
  );
}
