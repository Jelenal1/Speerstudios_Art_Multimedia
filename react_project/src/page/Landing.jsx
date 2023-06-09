import Navbar from "../components/Navbar";
import bglanding from "../img/Landingbg.jpg";

function Landing() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen object-cover"
        style={{ backgroundImage: `url(${bglanding})` }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          impedit modi a id obcaecati corporis voluptatem, magnam cupiditate
          dignissimos ipsam exercitationem non omnis magni eligendi iure unde
          cum et quibusdam.
        </p>
      </div>
    </>
  );
}
export default Landing;
