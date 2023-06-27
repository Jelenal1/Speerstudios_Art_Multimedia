import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Privacy() {
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
            <strong>Privacy Policy</strong>
            <br />
            <strong>1. Introduction</strong>
            <br />
            SpeerStudios ("we", "our" or "us") operates the www.speerstudios.ch
            website (hereinafter referred to as the "Service"). This page
            informs you of our policies regarding the collection, use, and
            disclosure of personal data when you use our Service.
            <br />
            This website is part of a school project and is for illustrative
            purposes only. The SpeerStudios collective, its management, and the
            address in Lugano, Switzerland, are entirely fictional. Any
            resemblance to real entities, living or dead, or actual events is
            purely coincidental.
            <br />
            By using the Service, you agree to the collection and use of
            information in accordance with this policy.
            <br />
            <strong>2. Data Collection</strong>
            <br />
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
            <br />
            <strong>3. Use of Data</strong>
            <br />
            SpeerStudios uses the collected data for various purposes, such as
            providing and maintaining the Service, notifying you about changes
            to our Service, providing customer support, and gathering analysis
            or valuable information so that we can improve the Service.
            <br />
            <strong>4. Transfer of Data</strong>
            <br />
            Your information may be transferred to — and maintained on —
            computers located outside of your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ
            from those in your jurisdiction.
            <br />
            <strong>5. Disclosure of Data</strong>
            <br />
            We may disclose your Personal Data in the good faith belief that
            such action is necessary to comply with a legal obligation, protect
            and defend the rights or property of SpeerStudios, prevent or
            investigate possible wrongdoing in connection with the Service, or
            protect the personal safety of users of the Service or the public.
            <br />
            <strong>6. Security of Data</strong>
            <br />
            The security of your data is important to us, but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
            <br />
            <strong>7. Service Providers</strong>
            <br />
            We may employ third-party companies and individuals to facilitate
            our Service ("Service Providers"), provide the Service on our
            behalf, perform Service-related services, or assist us in analyzing
            how our Service is used. These third parties have access to your
            Personal Data only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
            <br />
            <strong>8. Google Firebase</strong>
            <br />
            Our Service uses Google Firebase for backend services. Firebase may
            collect information from you, which will be used in accordance with
            Google’s Privacy Policy.
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
