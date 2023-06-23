import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import { useState } from "react";

function Navbar() {
  const style = {
    buttonLg: `mx-10 text-xl bg-[#F18CED] h-fit rounded-lg w-24 hidden lg:block`,
    buttonSm: `text-xl bg-[#F18CED] h-fit rounded-lg w-24 block lg:hidden my-10`,
    wrapperSm: `flex flex-col items-center bg-gray-300 fixed top-0 right-0 w-40 h-full`
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 flex items-center font-main h-14 sticky w-full">
      <div className="flex items-center ml-1 mr-2">
        <img src={logo} className="h-10" />
        <h1 className="text-3xl">SpeerStudios</h1>
      </div>
      <div className="flex">
        <button className={style.buttonLg} onClick={() => navigate("/")}>Home</button>
        <button className={style.buttonLg} onClick={() => navigate("/offerings")}>Offerings</button>
        <button className={style.buttonLg}>About Us</button>
        <button className={style.buttonLg}>Contact</button>
      </div>
      <button className="ml-auto" onClick={handleOpen} >open</button>
      <div className={open ? style.wrapperSm : "hidden"}>
        <button className="text-3xl mt-10" onClick={() => handleClose()}>✖️</button>
        <button className={style.buttonSm} onClick={() => navigate("/")}>Home</button>
        <button className={style.buttonSm} onClick={() => navigate("/offerings")}>Offerings</button>
        <button className={style.buttonSm}>About Us</button>
        <button className={style.buttonSm}>Contact</button>
      </div>
    </div>
  );
}
export default Navbar;
