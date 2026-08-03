import "./Reels.css";
import Reel from "./assets/Reel.js";

function Reels() {
  return (
    <div className="reels-page">
      <div className="account-details">
        {Reel.map((item, index) => (
        <div className="reel-items" key={index}>
          <i className={item.icon}></i>
          <p>{item.text}</p>
        </div>
      ))}
      </div>

      <div className="reel-video"></div>

      <div className="reel-actions"></div>
    </div>
  );
}

export default Reels;
