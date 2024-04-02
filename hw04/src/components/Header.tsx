import pokeball from "../assets/Pokeball.svg";
import heart from "../assets/Heart.svg";
import settings from "../assets/Settings.svg";

function Header() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-[45px] h-[85px] bg-header-lt dark:bg-header-dt">
      <div className="flex flex-row items-center">
        <img src={pokeball} alt="Pokeball" />
        <h1 className="text-page-lt font-semibold text-lg ml-[10px]">
          POKEDEX
        </h1>
      </div>
      <div className="flex flex-row items-center">
        <button>
          <img src={heart} alt="Heart" />
        </button>
        <button className="ml-[28px]">
          <img src={settings} alt="Settings" />
        </button>
      </div>
    </div>
  );
}

export default Header;
