import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Issues.css";

export default function Issues() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".issues__bg:nth-child(1)", {
          xPercent: "-30",
          duration: 2,
          ease: "none",
          repeat: -1,
        })
        .to(
          ".issues__bg:nth-child(2)",
          {
            xPercent: "30",
            duration: 2,
            ease: "none",
            repeat: -1,
          },
          "<"
        )
        .to(
          ".issues__bg:nth-child(3)",
          {
            xPercent: "-30",
            duration: 2,
            ease: "none",
            repeat: -1,
          },
          "<"
        )
        .to(
          ".issues__bg:nth-child(4)",
          {
            xPercent: "30",
            duration: 2,
            ease: "none",
            repeat: -1,
          },
          "<"
        )
        .to(".issues__fg", {
          y: 0,
          opacity: 1,
        })
        .to(".issues__item--third-issue", {
          x: 0,
          opacity: 1,
        })
        .to(".issues__item--second-issue", {
          x: 0,
          opacity: 1,
        })
        .to(".issues__item--first-issue", {
          x: 0,
          opacity: 1,
        });
    }, el);
  }, []);

  return (
    <section className="issues" ref={el}>
      <div className="issues__bg" />
      <div className="issues__bg" />
      <div className="issues__bg" />
      <div className="issues__bg" />
      <div className="issues__fg" />
      <div className="issues__item issues__item--first-issue">
        羨慕別人的酷酷網頁動畫？ <div className="issues__corner" />
      </div>
      <div className="issues__item issues__item--second-issue">
        動畫技能樹太雜無從下手？ <div className="issues__corner" />
      </div>
      <div className="issues__item issues__item--third-issue">
        滿足不了同事的許願？ <div className="issues__corner" />
      </div>
    </section>
  );
}
