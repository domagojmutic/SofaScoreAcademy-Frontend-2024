import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Themes } from "../models/models";

function ConfigMenu() {
  const { theme, setTheme } = useContext(ThemeContext);

  function updateTheme(theme: Themes) {
    if (theme === "auto") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);

    setTheme(theme);
  }

  return (
    <div className="w-[245px] absolute top-[90px] right-[45px] flex flex-col z-50 rounded-md bg-details-lt dark:bg-header-dt text-text-lt dark:text-text-dt shadow-[0px_0px_16px_0px_#00000040]">
      <span className="font-semibold text-[16px] mx-[17px] mt-[12px] mb-[7px]">
        Theme
      </span>
      <ul className="text-[12px] mx-[17px] mb-[19px] list-[circle] list-inside">
        <li className={"mb-[7px] " + (theme === "auto" ? "list-disc" : "")}>
          <button onClick={() => updateTheme("auto")}>Auto</button>
        </li>
        <li className={"mb-[7px] " + (theme === "light" ? "list-disc" : "")}>
          <button onClick={() => updateTheme("light")}>Light</button>
        </li>
        <li className={theme === "dark" ? "list-disc" : ""}>
          <button onClick={() => updateTheme("dark")}>Dark</button>
        </li>
      </ul>
    </div>
  );
}

export default ConfigMenu;
