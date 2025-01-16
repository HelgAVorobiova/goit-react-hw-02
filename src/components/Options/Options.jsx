// import css from "./Options.module.css";

export default function Options({
  btnOption,
  onClickFeetback,
  totalFeedback,
  onResetFeedback,
}) {
  return (
    <div>
      {btnOption.map(option => (
        <button key={option} onClick={() => onClickFeetback(option)}>
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={onResetFeedback} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      )}
    </div>
  );
}
