import Navbar from "../components/Navbar.jsx";
import { db } from "../firebase";
import { getCollection } from "firebase/firestore";

export default function Offerings() {
  const [offeringsdata, setOfferingsData] = useState([]);

  const getOfferings = async () => {
    const data = await getCollection(db, "offerings");
    setOfferingsData(data);
  };

  useEffect(() => {
    getOfferings();
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
