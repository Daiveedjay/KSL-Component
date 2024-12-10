import { RiTailwindCssFill } from "react-icons/ri";

const NavButtons = ["Docs", "Components", "Blog", "Showcase"];

export default function Nav() {
  return (
    <header className=" flex justify-between text-base font-medium  p-4">
      <div className=" flex items-center gap-2">
        <RiTailwindCssFill size={24} fill="#38BDF8" />
        <span className=" text-lg ">tailwindcss</span>
      </div>
      <ul className=" flex gap-4">
        {NavButtons.map((navText, index) => (
          <li
            key={index}
            className=" p-2 cursor-pointer hover:text-[#38bdf8] rounded-sm">
            {navText}
          </li>
        ))}
      </ul>
    </header>
  );
}
