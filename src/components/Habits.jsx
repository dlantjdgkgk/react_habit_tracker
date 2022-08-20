import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";

const Habits = ({ habits, handleMinus, handlePlus, handleDelete, handleAdd, handleReset }) => {
  return (
    <>
      <HabitAddForm handleAdd={handleAdd} />
      {habits.map((habit) => {
        return (
          <Habit
            key={habit.id}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
            handleDelete={handleDelete}
            habit={habit}
          />
        );
      })}
      <button onClick={handleReset}>reset all</button>
    </>
  );
};

export default Habits;
