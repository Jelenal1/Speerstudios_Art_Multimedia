export default function About() {
  style = {
    maincontainer: "flex flex-col min-h-screen items-center font-main",
    button: "text-xl bg-[#F18CED] h-fit rounded-lg w-24",
  };

  return (
    <div className={style.maincontainer}>
      <h1>About</h1>
    </div>
  );
}
