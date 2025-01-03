// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-5xl mx-auto flex items-center gap-3 font-semibold uppercase">
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
