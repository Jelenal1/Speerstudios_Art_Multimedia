import { useState } from "react";
import Navbar from "../components/Navbar";
import bglanding from "../img/Landingbg.jpg";
import bglanding2 from "../img/Landingbg2.jpg";
import bglanding3 from "../img/Landingbg3.jpg";
import { useEffect } from "react";

function Landing() {
  const style = {
    paragraphsaying: `bg-gray-300 h-14 flex justify-center items-center font-main text-2xl`,
    pwrapper: `h-96 my-40 flex flex-col justify-center`,
  };
  const backgrounds = [bglanding, bglanding2, bglanding3];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = document.documentElement.scrollHeight - 200;

      const maxIndex = backgrounds.length - 1;
      const index = Math.floor(
        (scrollPosition / sectionHeight) * backgrounds.length
      );
      const newIndex = Math.min(index, maxIndex);

      setCurrentBackgroundIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgrounds.length]);

  const currentBackground = backgrounds[currentBackgroundIndex];

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen object-cover"
      style={{
        backgroundImage: `url(${currentBackground})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-around min-h-screen">
        <div className={style.pwrapper}>
          <p className={style.paragraphsaying}>
            We don't make Art, we live Art
          </p>
        </div>
        <div className={style.pwrapper}>
          <p className={style.paragraphsaying}>Pure chaos and no structure</p>
        </div>
        <div className={style.pwrapper}>
          <p className={style.paragraphsaying}>
            If you want to be part of it, try it out.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Landing;
