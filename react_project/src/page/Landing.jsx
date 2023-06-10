import Navbar from "../components/Navbar";
import bglanding from "../img/Landingbg.jpg";
import bglanding2 from "../img/Landingbg2.jpg";
import bglanding3 from "../img/Landingbg3.jpg";

function Landing() {
  const style = {
    paragraphsaying: `bg-gray-300 h-14 flex justify-center items-center font-main text-2xl`,
    bgpicture: `bg-cover bg-center bg-fixed object-cover min-h-screen flex flex-col justify-center`,
  };

  return (
    <div>
      <Navbar />
      <div
        className={style.bgpicture}
        style={{
          backgroundImage: `url(${bglanding})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p className={style.paragraphsaying}>We don't make Art, we live Art</p>
      </div>
      <div
        className={style.bgpicture}
        style={{
          backgroundImage: `url(${bglanding2})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p className={style.paragraphsaying}>Pure chaos and no structure</p>
      </div>
      <div
        className={style.bgpicture}
        style={{
          backgroundImage: `url(${bglanding3})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p className={style.paragraphsaying}>
          If you want to be part of it, try it out.
        </p>
      </div>
    </div>
  );
}

export default Landing;
