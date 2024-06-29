import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import icon from "../../../images/6735960.jpg"

export function Nav() {
  return (
    <>
      <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <span
            
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              className="w-[50px] h-[50px] drop-shadow-md rounded-3xl"
              src={icon}
              alt=""
            />
            <span className="text-4xl font-black text-gray-700 dark:text-whit>Articles ml-8">
              SPACE NEWS
            </span>
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          
          </button>
        
        </div>
      </nav>
    </>
  );
}
