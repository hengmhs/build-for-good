import "./Question.css";

export default function Question({ content, sender }) {
  return (
    <div className="Pseudo-Phone">
      <div className="CallerID">
        <h4>{sender}</h4>
      </div>
      <div className="Question">{content}</div>
      <div className="Input">
        <div className="Input-TextBox"></div>
        <div className="Input-Send"></div>
      </div>
    </div>
  );
}
