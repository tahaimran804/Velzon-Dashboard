import React, { useContext, useState } from "react";
import { MdOutlineSettings, MdClose, MdOutlineDone } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";

const Setting = () => {
  const [openThemeCustomizer, setOpenThemeCustomizer] = useState(false);
  const { switchTheme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <span
        onClick={() => setOpenThemeCustomizer(true)}
        className="bg-purple-600 cursor-pointer fixed bottom-10 right-8 text-white  w-[60px] h-[60px] flex items-center justify-center text-2xl rounded-full shadow-lg hover:scale-105 transition"
      >
        <MdOutlineSettings className="animate-rotate360" />
      </span>

      {openThemeCustomizer && (
        <div
          onClick={() => setOpenThemeCustomizer(false)}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-500"
        ></div>
      )}

      <section
        className={`fixed z-60 top-0 right-0 h-screen sm:w-[25rem] w-full bg-white dark:bg-[#1a1d21] transform transition-transform duration-500 ease-in-out shadow-xl 
        ${openThemeCustomizer ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="py-4 px-4 bg-purple-700 flex items-center justify-between w-full">
          <h1 className="text-xl text-white  font-semibold">Theme Customizer</h1>
          <span
            onClick={() => setOpenThemeCustomizer(false)}
            className="text-2xl cursor-pointer text-white hover:text-gray-200 transition"
          >
            <MdClose />
          </span>
        </div>

        <div className="py-6 px-5 flex flex-col gap-5">
          <div className="flex flex-col items-start">
            <h2 className="text-xl text-black dark:text-white font-semibold">Color Scheme</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Choose Light or Dark mode.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-4">
            <button
              onClick={() => ToggleTheme("light")}
              className={`relative w-[140px] h-[80px] border-2 rounded-md text-sm font-medium flex items-center justify-center cursor-pointer transition-all duration-300 ${switchTheme === "light"
                ? "border-purple-600 bg-[#EEEEF4] text-black"
                : "border-gray-400 bg-gray-100 text-gray-600"
                }`}
            >
              Light
              {switchTheme === "light" && (
                <span className="absolute w-[22px] h-[22px] rounded-full top-2 right-2 bg-purple-600 text-white flex items-center justify-center text-lg">
                  <MdOutlineDone />
                </span>
              )}
            </button>

            <button
              onClick={() => ToggleTheme("dark")}
              className={`relative w-[140px] h-[80px] border-2 rounded-md text-sm font-medium flex items-center justify-center cursor-pointer transition-all duration-300 ${switchTheme === "dark"
                ? "border-purple-600 bg-black text-white"
                : "border-gray-400 bg-gray-800 text-gray-300"
                }`}
            >
              Dark
              {switchTheme === "dark" && (
                <span className="absolute w-[22px] h-[22px] rounded-full top-2 right-2 bg-purple-600 text-white flex items-center justify-center text-lg">
                  <MdOutlineDone />
                </span>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;
