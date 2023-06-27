import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  const style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    paragraphsaying: `bg-gray-300 h-60 p-2 my-10 w-full flex flex-col items-center justify-center text-center font-main text-2xl`,
    input: "border-2 rounded-lg",
  };

  return (
    <>
      <Navbar />
      <div className={style.maincontainer}>
        <h1 className="text-3xl mt-2">Contact</h1>
        <form className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" className={style.input} />
          <label htmlFor="name">Name</label>
          <input type="name" className={style.input} />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className={style.input}
          ></textarea>
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
