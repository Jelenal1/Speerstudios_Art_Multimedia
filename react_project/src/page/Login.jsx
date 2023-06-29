import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const loggin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl mt-2">Login</h1>
        <form
          className="flex flex-col mt-2 w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            loggin(e.target.email.value, e.target.password.value);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg w-full focus:outline focus:outline-2 focus:outline-[#F18CED]"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border-2 rounded-lg w-full focus:outline focus:outline-2 focus:outline-[#F18CED]"
          />
          <button type="submit">OK</button>
        </form>
        <h2 className="text-xl mt-4">Don't have an account</h2>
        <button onClick={() => navigate("/signup")} className="bg-[#F18CED] text-white mx-auto p-1 rounded-lg">Sign Up</button>
      </div>
    </>
  );
}
