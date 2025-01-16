import css from "./Options.module.css";

export default function Options({
  btnOption,
  onClickFeetback,
  totalFeedback,
  onResetFeedback,
}) {
  return (
    <div className={css.optionContainer}>
      {btnOption.map(option => (
        <button
          className={css.optionBtn}
          key={option}
          onClick={() => onClickFeetback(option)}
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button
          className={css.optionBtnReset}
          onClick={onResetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
}
