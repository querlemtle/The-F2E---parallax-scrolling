import mobileBanner from "../../assets/mobile-banner.png";
import desktopBanner from "../../assets/desktop-banner.png";
import Counter from "./Counter";
import "./Banner.css";

const counters = [
  {
    id: 0,
    num: 1192,
    title: "總報名人數",
  },
  {
    id: 1,
    num: 1086,
    title: "個人賽人數",
  },
  {
    id: 2,
    num: 41,
    title: "團體組數",
  },
];

export default function Banner() {
  return (
    <section className="banner">
      <picture className="banner__pic">
        <source srcSet={mobileBanner} media="(max-width: 992px)" />
        <img
          className="banner__pic banner__pic--desktop"
          src={desktopBanner}
          alt="Banner"
        />
      </picture>
      <div className="banner__counters">
        {counters.map((counter) => (
          <Counter count={counter.num} title={counter.title} key={counter.id} />
        ))}
      </div>
    </section>
  );
}
