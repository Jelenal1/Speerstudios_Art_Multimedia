import logo from "../img/Logo.png";

function Footer() {
  const style = {
    linkbutton: "w-32 text-center hover:underline hover:text-[#F18CED]",
  };
  return (
    <div className="bg-gray-300 flex flex-col items-center">
      <div className="flex items-center my-2">
        <img src={logo} className="h-10" />
        <h1 className="text-3xl font-main">SpeerStudios</h1>
      </div>
      <a href="/contact" className={style.linkbutton}>
        Contact
      </a>
      <a href="/imprint" className={style.linkbutton}>
        Imprint
      </a>
      <a href="/terms" className={style.linkbutton}>
        Terms of Service
      </a>
      <a href="/privacy" className={style.linkbutton}>
        Privacy Policy
      </a>
      <span className="my-2">© SpeerStudios 2023 by Jelena Speer</span>
    </div>
  );
}
export default Footer;
