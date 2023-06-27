import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { auth, db, storage } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Image from "../components/Image.jsx";
import { Carousel, IconButton } from "@material-tailwind/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ref, uploadBytes } from "firebase/storage";
import Footer from "../components/Footer.jsx";

export default function Offerings() {
  const [offeringsdata, setOfferingsData] = useState([]);
  const [loggedIn, setLoggedIn] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
      return;
    }
    setLoggedIn(false);
  });

  const getOfferings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "offerings"));
      const alldocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOfferingsData(alldocs);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadOfferings = async (title, price, imagenames) => {
    await addDoc(collection(db, "offerings"), {
      title: title,
      price: price,
      imagenames: imagenames,
    });

    getOfferings();
  };

  const uploadImages = async (e) => {
    const files = e.target[2].files;

    if (
      files.length === 0 ||
      e.target[0].value === "" ||
      e.target[1].value === ""
    )
      return;

    const imagenames = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `offerings/${file.name}`);
      console.log(storageRef);
      await uploadBytes(storageRef, file);
      imagenames.push(file.name);
    }

    await uploadOfferings(e.target[0].value, e.target[1].value, imagenames);
  };

  useEffect(() => {
    getOfferings();
  }, []);

  const style = {
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
    input: "border-2 rounded-lg",
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl">Offerings</h1>
        {loggedIn ? (
          <>
            <form
              className="flex flex-col mt-2"
              onSubmit={(e) => {
                e.preventDefault();
                uploadImages(e);
              }}
            >
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className={style.input} />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                step="10"
                className={style.input}
              />
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                multiple="multiple"
                className={style.input}
              />
              <button type="submit" className={style.button}>
                Upload
              </button>
            </form>
          </>
        ) : null}
        {offeringsdata.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-full items-center my-10"
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
      <Footer />
    </>
  );
}
