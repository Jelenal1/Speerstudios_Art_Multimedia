import Navbar from "../components/Navbar";
import bglanding from "../img/Landingbg.jpg";
import bglanding2 from "../img/Landingbg2.jpg";
import bglanding3 from "../img/Landingbg3.jpg";
import bglanding4 from "../img/Landingbg4.jpg";

function Landing() {
  const style = {
    paragraphsaying: `bg-gray-300 h-14 flex justify-center items-center font-main text-2xl`,
    bgpicture: `bg-cover bg-center bg-fixed object-cover min-h-screen flex flex-col justify-center`,
    button: "ml-1.5 text-3xl h-fit rounded-lg w-10 bg-[#F18CED]",
  };

  return (
    <>
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
      <div
        className={style.bgpicture}
        style={{
          backgroundImage: `url(${bglanding4})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p className={style.paragraphsaying}>Express your self</p>
      </div>
      <div
        className={style.bgpicture}
        style={{
          backgroundImage: `url(${bglanding4})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p className={style.paragraphsaying}>
          Get a peace of
          <span className="text-3xl ml-2">Us</span>
        </p>
      </div>
    </>
  );
}

export default Landing;
