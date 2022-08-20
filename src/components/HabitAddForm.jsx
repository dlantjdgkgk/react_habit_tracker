import { memo, useRef } from "react";

const HabitAddForm = memo(({ handleAdd }) => {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && handleAdd();
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
