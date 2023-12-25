import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  return (
    <div className="flex justify-between items-center px-12 py-3 sticky top-0 bg-zinc-950">
      <div className="text-3xl">
        <Link to={"/"} className="text-red-500">
          Utube
        </Link>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          navigate(`/search/${input}`);
          setInput("");
        }}
        className="w-[500px] lg:flex hidden"
      >
        <input
          type="text"
          className="w-full bg-zinc-800 focus:bg-zinc-700 px-3 py-[6px] rounded-s-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 px-4 rounded-e-lg">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <div className="text-2xl">
        <i className="fas fa-user text-red-500"></i>
      </div>
    </div>
  );
}

export default Navbar;
