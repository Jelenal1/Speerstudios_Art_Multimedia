import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Imprint() {
  const style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    paragraphsaying: `bg-gray-300 p-2 mt-40 w-full flex flex-col items-center justify-center text-center font-main text-2xl`,
  };

  return (
    <>
      <Navbar />
      <div className={style.maincontainer}>
        <h1 className="text-3xl mt-2">Imprint</h1>
        <div className={style.paragraphsaying}>
          <p>
            This website is part of a school project and is for illustrative
            purposes only. <br />
            The SpeerStudios collective, its management, and the address in
            Lugano, Switzerland, are entirely fictional. <br />
            Any resemblance to real entities, living or dead, or actual events
            is purely coincidental.
            <br />
            <br />
            SpeerStudios <br />
            Via Monte Bre 10 <br />
            6900 Lugano <br />
            Switzerland <br />
            Contact: <br />
            <br />
            Email: info@speerstudios.ch <br />
            Phone: +41 91 123 4567 <br />
            <br />
            Commercial Register: Canton of Ticino, HRB 123456 <br />
            VAT ID: CHE-123.456.789 MWST <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
