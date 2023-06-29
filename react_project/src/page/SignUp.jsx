import Navbar from "../components/Navbar";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {

  const navigate = useNavigate();
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
     await setDoc(doc(db, "users" , auth.currentUser.uid), {
        role: "User",
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL
     })
     navigate("/offerings");
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl mt-2">Sign Up</h1>
        <form
          className="flex flex-col mt-2 w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            signup(e.target.email.value, e.target.password.value);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border-2 rounded-lg"
          />
          <button type="submit">OK</button>
        </form>
        <h2 className="text-xl mt-4">Already have an account</h2>
        <button onClick={() => navigate("/login")} className="bg-[#F18CED] text-white mx-auto p-1 rounded-lg">Login</button>
      </div>
    </>
  );
}
