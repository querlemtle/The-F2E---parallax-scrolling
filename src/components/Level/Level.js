import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Flow from "./Flow";
import Contexts from "./Contexts";
import "./Level.css";

const contextsList = [
  {
    id: 1,
    week: 1,
    title: "The F2E 活動網站設計",
    tag: "視差滾動",
    sponsor: "版塊設計",
  },
  {
    id: 2,
    week: 2,
    title: "今晚，我想來點點簽",
    tag: "Canvas",
    sponsor: "凱鈿行動科技",
  },
  {
    id: 3,
    week: 3,
    title: "Scrum 新手村",
    tag: "JS draggable",
    sponsor: "鈦坦科技",
  },
];

export default function Level() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".flow__circle:nth-child(3)", {
          y: 0,
          opacity: 1,
        })
        .to(
          ".context__container:nth-child(1)",
          {
            y: 0,
            opacity: 1,
          },
          "<"
        )
        .to(".flow__line:nth-child(1)", {
          opacity: 1,
        })
        .to(".flow__circle:nth-child(4)", {
          y: 0,
          opacity: 1,
        })
        .to(
          ".context__container:nth-child(2)",
          {
            y: 0,
            opacity: 1,
          },
          "<"
        )
        .to(".flow__line:nth-child(2)", {
          opacity: 1,
        })
        .to(".flow__circle:nth-child(5)", {
          y: 0,
          opacity: 1,
        })
        .to(
          ".context__container:nth-child(3)",
          {
            y: 0,
            opacity: 1,
          },
          "<"
        );
    }, el);
  }, []);

  return (
    <section className="level" ref={el}>
      <Flow ordinal={3} unit="Week" />
      <div className="context">
        {contextsList.map((item) => (
          <Contexts
            title={item.title}
            tag={item.tag}
            sponsor={item.sponsor}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}
