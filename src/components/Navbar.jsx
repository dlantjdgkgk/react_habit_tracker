import { memo } from "react";

const Navbar = memo(({ totalCount }) => {
  return (
    <nav className="navbar">
      <span>Habit Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </nav>
  );
});

export default Navbar;
