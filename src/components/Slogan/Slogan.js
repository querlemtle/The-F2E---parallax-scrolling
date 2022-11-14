import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Slogan.css";

export default function Slogan() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".slogan__title:nth-child(1)", {
          y: 0,
          opacity: 1,
        })
        .to(".slogan__title:nth-child(2)", {
          y: 0,
          opacity: 1,
        })
        .to(".slogan__subtitle:nth-child(3)", {
          y: 0,
          opacity: 1,
        })
        .to(".slogan__subtitle:nth-child(4)", {
          y: 0,
          opacity: 1,
        });
    }, el);
  }, []);

  return (
    <section className="slogan" ref={el}>
      <h1 className="slogan__title">年度最強合作，</h1>
      <h1 className="slogan__title"> 三大主題來襲。</h1>
      <h3 className="slogan__subtitle">各路廠商強強聯手，</h3>
      <h3 className="slogan__subtitle">共同設計出接地氣的網頁互動挑戰關卡。</h3>
      <div className="slogan__bg slogan__bg--triangle" />
      <div className="slogan__bg slogan__bg--rectangle" />
      <div className="slogan__bg slogan__bg--circle" />
    </section>
  );
}
