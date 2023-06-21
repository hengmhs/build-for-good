import "./Question.css";

export default function Question({ content, sender }) {
  return (
    <div className="Pseudo-Phone">
      <div className="CallerID">
        <h3>{sender}</h3>
      </div>
      <div className="Messages">
        <div className="Question">{content}</div>
      </div>
      <div className="Input">
        <div className="Input-TextBox"></div>
        <div className="Input-Send"></div>
      </div>
    </div>
  );
}
