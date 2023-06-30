import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const naviate = useNavigate();

  const loggin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      naviate("/offerings");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center font-main">
        <h1 className="text-3xl">Login</h1>
        <form
          className="flex flex-col mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            loggin(e.target.email.value, e.target.password.value);
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
