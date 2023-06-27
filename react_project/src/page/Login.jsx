import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen items-center font-main">
      <Navbar />
      <h1 className="text-3xl">Login</h1>
      <form className="flex flex-col mt-2">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="border-2 rounded-lg w-96" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border-2 rounded-lg w-96"
        />
      </form>
    </div>
  );
}
