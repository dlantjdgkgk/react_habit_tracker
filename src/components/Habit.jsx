const Habit = ({ handleMinus, habit, handlePlus, handleDelete }) => {
  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => {
          handlePlus(habit);
        }}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => {
          handleMinus(habit);
        }}
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => {
          handleDelete(habit);
        }}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
