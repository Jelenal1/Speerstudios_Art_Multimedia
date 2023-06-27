import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "../components/Image.jsx";
import { Carousel } from "@material-tailwind/react";

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
            <div key={item.id} className="flex flex-col items-center mt-5">
              <h2 key={item.id} className="text-2xl">{item.title}</h2>
              <Carousel className=" border-2 w-[800px] h-[605px]">
                {item.imagenames.map((image) => {
                  return (
                    <div key={image} className="flex justify-center w-[800px] h-[600px]">
                      <Image imagename={image} />
                    </div>
                  )
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
