import pokeball from "../assets/Pokeball.svg";
import heart from "../assets/Heart_header.svg";
import settings from "../assets/Settings.svg";
import ConfigMenu from "./ConfigMenu";
import { useState } from "react";

function Header() {
  const [configOpened, setConfigOpened] = useState(false);

  return (
    <div className="sticky top-0 w-full h-[85px] px-[45px] flex flex-row justify-between items-center z-50 phone:h-[45px] phone:pl-[11px] phone:pr-[17px] bg-header-lt dark:bg-header-dt">
      <div className="flex flex-row items-center">
        <img
          className="phone:w-[25px] phone:h-[25px]"
          src={pokeball}
          alt="Pokeball"
        />
        <h1 className="text-page-lt font-semibold text-lg ml-[11px] phone:ml-[9px] phone:text-[18px]">
          POKEDEX
        </h1>
      </div>
      <div className="flex flex-row items-center">
        <button>
          <img
            className="phone:w-[25px] phone:h-[25px]"
            src={heart}
            alt="Heart"
          />
        </button>
        <button
          className="ml-[28px] phone:ml-[12px]"
          onClick={() => setConfigOpened((old) => !old)}
        >
          <img
            className="phone:w-[25px] phone:h-[25px]"
            src={settings}
            alt="Settings"
          />
        </button>
      </div>
      <ConfigMenu opened={configOpened} changeState={setConfigOpened} />
    </div>
  );
}

export default Header;
