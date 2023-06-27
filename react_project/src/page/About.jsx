import Navbar from "../components/Navbar.jsx";

export default function About() {
 const style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    paragraphsaying: `bg-gray-300 p-2 my-10 w-full flex flex-col items-center text-center font-main text-2xl`
  };

  return (
    <>
    <Navbar />
    <div className={style.maincontainer}>
      <h1 className="text-3xl mt-2">About</h1>
      <div className={style.paragraphsaying}>
      <p>Hi there, glad to see you.
    <br />This is the about page.
      <br/> <strong> A quick disclaimer </strong> <br /> you may want to read,<br/>
      who we are.
      <br /> But we are nothing
      <br /> And No One.
      </p>
      </div>
      
    </div>
    </>
  );
}
