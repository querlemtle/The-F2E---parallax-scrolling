import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Description.css";
import Stage from "./Stage";

export default function Description() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".description__title--mobile", {
          y: 0,
          opacity: 1,
        })
        .to(".description__title--desktop", {
          y: 0,
          opacity: 1,
        })
        .to(".stage__timeline", {
          scale: 1,
        })
        .to(
          ".stage__month",
          {
            opacity: 1,
            ease: "none",
          },
          "<"
        )
        .to(".stage__date--secondary", {
          opacity: 1,
        })
        .to(".stage__content--secondary", {
          opacity: 1,
        })
        .to(".stage__date--primary", {
          opacity: 1,
        })
        .to(".stage__content--primary", {
          opacity: 1,
        });
    }, el);
  }, []);

  return (
    <section className="description" ref={el}>
      <h2 className="description__title description__title--mobile">
        活動說明
      </h2>
      <h2 className="description__title description__title--desktop">
        活動採用 UI、前端接力合作形式，
        <br /> 前端工程師可採用 UI 設計師的設計稿，
        <br /> 一同產出完整作品。
      </h2>
      <Stage />
    </section>
  );
}
