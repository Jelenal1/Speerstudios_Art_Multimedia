import Navbar from "../components/Navbar";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl">Sign Up</h1>
        <form
          className="flex flex-col mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            signup(e.target.email.value, e.target.password.value);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg w-96"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border-2 rounded-lg w-96"
          />
          <button type="submit">OK</button>
        </form>
      </div>
    </>
  );
}
