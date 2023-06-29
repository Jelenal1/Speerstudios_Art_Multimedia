import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const style = {
    buttonLg: `mx-10 text-xl bg-[#F18CED] h-fit rounded-lg w-24 hidden lg:block`,
    buttonSm: `text-xl bg-[#F18CED] h-fit rounded-lg w-24 block lg:hidden my-10`,
    open: `flex flex-col items-center bg-gray-300 fixed top-0 right-0 w-32 h-full transition-all duration-300`,
    closed: `flex flex-col items-center bg-gray-300 fixed top-0 -right-20 w-32 h-full transition-all duration-300`,

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
        <button className={style.buttonLg} onClick={() => navigate("/about")}>About Us</button>
        <button className={style.buttonLg} onClick={() => navigate("/contact")}>Contact</button>
        <button className={style.buttonLg} onClick={() => navigate("/login")}>Login</button>
      </div>
      <button className="ml-auto mr-3 lg:hidden" onClick={handleOpen} ><AiOutlineMenu className="w-8 h-8" /></button>
      <div className={open ? style.open : style.closed + " -right-44"}>
        <button className="text-3xl mt-10" onClick={() => handleClose()}><AiOutlineClose /></button>
        <button className={style.buttonSm} onClick={() => navigate("/")}>Home</button>
        <button className={style.buttonSm} onClick={() => navigate("/offerings")}>Offerings</button>
        <button className={style.buttonSm} onClick={() => navigate("/about")}>About Us</button>
        <button className={style.buttonSm} onClick={() => navigate("/contact")}>Contact</button>
        <button className={style.buttonSm} onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}
export default Navbar;
