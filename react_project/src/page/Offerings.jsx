import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Offerings() {
  const [offeringsdata, setOfferingsData] = useState([]);

  const getOfferings = async () => {
    const data = await getDocs(collection(db, "offerings"));
    const alldocs = [];
    data.forEach((doc) => {
      alldocs.push({ ...doc.data(), id: doc.id });
    });
    setOfferingsData(alldocs);
  };

  useEffect(() => {
    getOfferings();
    console.log(offeringsdata);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="text-3xl">Offerings</h1>
      </div>
    </>
  );
}
