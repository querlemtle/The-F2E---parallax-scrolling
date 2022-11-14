import "./Stage.css";

export default function Stage() {
  return (
    <div className="stage">
      <div className="stage__timeline" />
      <div className="stage__card">
        <h3 className="stage__month">10月</h3>
        <h4 className="stage__date stage__date--secondary">10/13 ~ 10/30</h4>
        <p className="stage__content stage__content--secondary">
          活動報名期間 <br /> 截止前可修改報名組別
        </p>
        <h4 className="stage__date stage__date--primary">10/31</h4>
        <p className="stage__content stage__content--primary">UI、團體組開賽</p>
      </div>
      <div className="stage__card">
        <h3 className="stage__month">11月</h3>
        <h4 className="stage__date stage__date--secondary">10/31 ~ 11/28</h4>
        <p className="stage__content stage__content--secondary">
          登錄作品
          <br /> 依賽程登錄作品
        </p>
        <h4 className="stage__date stage__date--primary">11/7</h4>
        <p className="stage__content stage__content--primary">前端組開賽</p>
      </div>
    </div>
  );
}
