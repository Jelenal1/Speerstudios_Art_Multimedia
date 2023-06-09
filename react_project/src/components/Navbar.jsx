import logo from "../img/Logo.png";

function Navbar() {
  const style = {
    button: `ml-20 text-xl bg-[#F18CED] h-fit rounded-lg w-24`,
  };

  return (
    <div className="bg-gray-300 flex items-center font-main h-14 fixed w-full">
      <div className="flex items-center ml-1">
        <img src={logo} className="h-10" />
        <h1 className="text-3xl">SpeerStudios</h1>
      </div>
      <button className={style.button}>Home</button>
      <button className={style.button}>Offerings</button>
      <button className={style.button}>About Us</button>
      <button className={style.button}>Contact</button>
    </div>
  );
}
export default Navbar;
