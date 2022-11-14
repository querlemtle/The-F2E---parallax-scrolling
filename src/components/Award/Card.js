import ReviewerIcon from "../../assets/part7-reviewer-icon.svg";
import RewardIcon from "../../assets/part7-award-icon.svg";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <dl className="card__details">
        <div className="card__icon-bg">
          <img src={ReviewerIcon} alt="Reviewer-icon" className="card__icon" />
        </div>
        <dt className="card__title">評審機制</dt>
        <dd className="card__context">
          初選：將由六角學院前端、UI 評審進行第一波篩選。
        </dd>
        <dd className="card__context">
          決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
          由評審進行直播公布名單！
        </dd>
      </dl>
      <dl className="card__details">
        <div className="card__icon-bg">
          <img src={RewardIcon} alt="Reviewer-icon" className="card__icon" />
        </div>
        <dt className="card__title">獎項</dt>
        <dd className="card__context">
          初選佳作 共六十位{" "}
          <span className="card__context card__context--em">數位獎狀</span>
        </dd>
        <dd className="card__context">
          個人企業獎 共六位{" "}
          <span className="card__context card__context--em">數位獎狀</span>
        </dd>
        <dd className="card__context">
          團體企業獎 共三組{" "}
          <span className="card__context card__context--em">數位獎狀</span>
        </dd>
        <dd className="card__context">以上皆提供完賽數位獎狀</dd>
      </dl>
    </div>
  );
}
