import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="text-3xl">Offerings</h1>
        {offeringsdata.map((item) => {
          return (
            <div key={item.id}>
              {item.imagenames.map((imagename, index) => (
                <img src={imagename} key={index} />
              ))}
              <h2 key={item.id}>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
