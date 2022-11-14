import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import themeTitle from "../../assets/part3-title.svg";
import themeImg from "../../assets/part3-fg.png";
import "./Theme.css";

export default function Theme() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".theme__title", {
          y: 0,
          opacity: 1,
        })
        .to(".theme__subtitle", {
          y: 0,
          opacity: 1,
        });
    }, el);
  }, []);

  return (
    <section className="theme" ref={el}>
      <img className="theme__title" src={themeTitle} alt="互動式網頁設計" />
      <h3 className="theme__subtitle">UI設計師與前端工程師共同攜手合作。</h3>
      <img className="theme__img" src={themeImg} alt="Theme-foreground" />
    </section>
  );
}
