import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Terms() {
  const style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    paragraphsaying: `bg-gray-300 p-2 my-40 w-full flex flex-col items-center justify-center font-main text-2xl`,
  };

  return (
    <>
      <Navbar />
      <div className={style.maincontainer}>
        <h1 className="text-3xl mt-2">Terms of Service</h1>
        <div className={style.paragraphsaying}>
          <p>
            <strong> Introduction </strong> <br />
            Welcome to SpeerStudios. Please read on to learn the rules and
            restrictions that govern your use of our website. <br />
            This website is part of a school project and is for illustrative
            purposes only. <br />
            The SpeerStudios collective, its management, and the address in
            Lugano, Switzerland, are entirely fictional. <br />
            Any resemblance to real entities, living or dead, or actual events
            is purely coincidental. <br />
            By accessing or using the SpeerStudios website, you acknowledge that
            you have read, understood, and agree to be bound by these Terms of
            Service. <br />
            <strong> Content and Copyright </strong> <br />
            All content on this site, including text, graphics, logos, and
            images, is the property of SpeerStudios and protected by
            international copyright laws. <br />
            <strong>Limitation of Liability</strong> <br />
            The content on this site is provided "as is". We do not guarantee
            the accuracy, completeness, or usefulness of this content. <br />
            Changes to the Terms of Service We reserve the right to revise these
            Terms of Service at any time without prior notice. <br />
            Contact Information If you have any questions about these Terms of
            Service, please contact us at info@speerstudios.ch <br />
            <strong> Third-Party Services </strong> <br />
            This website uses Google Firebase, a platform provided by Google,
            for backend services such as data storage, user authentication, and
            analytics. <br />
            By using our site, you agree to the use of these services
            and acknowledge that your information may be transferred to Firebase
            in accordance with their Privacy Policy and Terms.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
