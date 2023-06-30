import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Terms() {
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
            <strong>Introduction</strong> <br />

            Welcome to SpeerStudios. Please read on to learn the rules and restrictions that govern your use of our website.

            This website is part of a school project and is for illustrative purposes only. The SpeerStudios collective, its management, and the address in Lugano, Switzerland, are entirely fictional. Any resemblance to real entities, living or dead, or actual events is purely coincidental.

            By accessing or using the SpeerStudios website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. <br />

            <strong>Content and Copyright</strong>  <br />

            All content on this site, including text, graphics, logos, and images, is the property of SpeerStudios and protected by international copyright laws. <br />

            <strong>Limitation of Liability </strong> <br />

            The content on this site is provided "as is". We do not guarantee the accuracy, completeness, or usefulness of this content. <br />

            <strong> Changes to the Terms of Service </strong> <br />

            We reserve the right to revise these Terms of Service at any time without prior notice. <br />

            <strong> Contact Information (fictional) </strong> <br />

            If you have any questions about these Terms of Service, please contact us at info@speerstudios.ch
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
