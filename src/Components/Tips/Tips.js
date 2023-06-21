import "./Tips.css";

const Tips = ({ warning, advice }) => {
  if (warning && advice) {
    const tips = [...advice];
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];

    return (
      <div className="tip-box">
        <p>{tip}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Tips;
