import Navbar from "./components/Navbar";
import Habits from "./components/Habits";
import { useState, useCallback } from "react";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handlePlus = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      }),
    );
  }, []);

  const handleMinus = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
      }),
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      }),
    );
  }, []);

  return (
    <div className="App">
      <Navbar totalCount={habits.filter((habit) => habit.count > 0).length} />
      <Habits
        habits={habits}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
