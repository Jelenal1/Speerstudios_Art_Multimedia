import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  const style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    paragraphsaying: `bg-gray-300 h-60 p-2 my-10 w-full flex flex-col items-center justify-center text-center font-main text-2xl`,
  };

  return (
    <>
      <Navbar />
      <div className={style.maincontainer}>
        <h1 className="text-3xl mt-2">About</h1>
        <div className={style.paragraphsaying}>
          <p>
            Hi there, glad to see you.
            <br />
            This is the about page.
            <br /> <strong> A quick disclaimer </strong> <br /> you may want to
            read,
            <br />
            who we are.
            <br /> But we are nothing
            <br /> And No One.
          </p>
        </div>
        <div className={style.paragraphsaying}>
          <p>
            We are a variety of artists. We are not interested in being famous
            or publicly known. <br />
            We just want to make our art and support others to make art too.<br />
            We are not looking for profit, we just want enough money for food
            and more art. <br />
            This is not just a cheesy catch phrase. We live art. <br />
          </p>
        </div>
        <div className={style.paragraphsaying}>
          <p>
            But even if you don't know us and you can't get to know us, <br />
            you will get your paintings one hundred percent. <br />
            We work with great suppliers who know how to handle paintings.<br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
