"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useLocalStorage } from "usehooks-ts";

type ThemeSwitcherType = {};

const ThemeSwitcher: React.FC<ThemeSwitcherType> = (props) => {
  const [themisDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);
  const [icon, setIcon] = useState(<HiOutlineMoon className={"text-xl"} />);
  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.darkTheme) &&
      !document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.add("dark");
      setIcon(<HiOutlineMoon className={"text-xl"} />);
    }
  }, []);

  useEffect(() => {
    if (themisDarkTheme) setIcon(<HiOutlineMoon className={"text-xl"} />);
    else setIcon(<HiOutlineSun className={"text-xl"} />);
  }, [themisDarkTheme]);

  return (
    <button
      className={"p-3 border border-gray-200 dark:border-gray-900 rounded"}
      onClick={toggleTheme}
    >
      {icon}
    </button>
  );
};

export default ThemeSwitcher;
