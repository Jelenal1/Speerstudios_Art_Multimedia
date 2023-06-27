import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "../components/Image.jsx";
import { Carousel, IconButton } from "@material-tailwind/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Offerings() {
  const [offeringsdata, setOfferingsData] = useState([]);

  const getOfferings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "offerings"));
      console.log("querySnapshot:", querySnapshot);
      const alldocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOfferingsData(alldocs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOfferings();
  }, []);

  const style = {
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl">Offerings</h1>
        {offeringsdata.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-full items-center mt-5"
            >
              <h2 key={item.id} className="text-2xl">
                {item.title}
              </h2>
              <Carousel
                className=" border-2 md:w-[800px] w-full h-[604px] rounded-lg"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="gray"
                    size="md"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4 rounded-full"
                  >
                    <AiOutlineLeft className="w-10 h-10 bg-gray-300 rounded-full" />
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="gray"
                    size="md"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4 rounded-full"
                  >
                    <AiOutlineRight className="w-10 h-10 bg-gray-300 rounded-full" />
                  </IconButton>
                )}
              >
                {item.imagenames.map((image) => {
                  return (
                    <div key={image} className="flex w-fit mx-auto">
                      <Image imagename={image} />
                    </div>
                  );
                })}
              </Carousel>
              <h2 className="text-2xl">{item.price + " CHF"}</h2>
              <button className={style.button}>Buy</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
