import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Nav from "./components/nav";
import SearchBox from "./components/search-box";
import { useKeyBindings } from "./hooks/useKeyBindings";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useKeyBindings([
    {
      keys: ["Control", "k"], // Listen for "Ctrl + K"
      callback: () => setIsOpen((prev) => !prev), // Toggle the search box
    },
    {
      keys: ["Control", "d"], // Listen for "Ctrl + D"
      callback: () => setIsOpen((prev) => !prev), // Toggle the search box
    },
    {
      keys: ["Escape"], // Listen for "Escape"
      callback: () => setIsOpen(false), // Close the search box
    },
  ]);

  return (
    <div className=" text-white text-3xl h-[100dvh] home__bg">
      <Nav />

      <div className="relative max-w-5xl pt-20 mx-auto sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-400">
          A utility-first CSS framework packed with classes like
          <code className="font-mono font-medium text-sky-400"> flex</code>,
          <code className="font-mono font-medium text-sky-400"> pt-4</code>,
          <code className="font-mono font-medium text-sky-400">
            {" "}
            text-center
          </code>{" "}
          and
          <code className="font-mono font-medium text-sky-400">
            {" "}
            rotate-90
          </code>{" "}
          that can be composed to build any design, directly in your markup.
        </p>
        <div className="flex justify-center mt-6 space-x-6 text-sm sm:mt-10">
          <button className="flex items-center justify-center w-full h-12 px-6 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
            Get started
          </button>
          <button
            type="button"
            className="items-center hidden h-12 px-4 space-x-3 text-left rounded-lg shadow-sm sm:flex w-72 ring-slate-900/10 focus:outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500 bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700"
            onClick={() => setIsOpen(true)}>
            <BiSearch size={20} />
            <span className="flex-auto">Quick search...</span>
            <kbd className="font-sans font-semibold text-slate-500">
              <abbr title="Control" className="no-underline text-slate-500">
                Ctrl{" "}
              </abbr>{" "}
              K
            </kbd>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <SearchBox close={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}
