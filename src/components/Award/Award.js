import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Award.css";
import Card from "./Card";

export default function Award() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".award__title", {
          y: 0,
          opacity: 1,
        })
        .to(".card__details:nth-child(1)", {
          y: 0,
          opacity: 1,
        })
        .to(".card__details:nth-child(2)", {
          y: 0,
          opacity: 1,
        });
    }, el);
  }, []);

  return (
    <section className="award" ref={el}>
      <h2 className="award__title award__title--mobile">獎項設計</h2>
      <h2 className="award__title award__title--desktop">
        區區修煉已經無法滿足了嗎？
        <br />
        還有比賽等著你！
      </h2>
      <Card />
      <a href="https://2022.thef2e.com/login" className="award__link">
        立即報名
      </a>
    </section>
  );
}
