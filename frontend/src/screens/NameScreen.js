import Navbar from "../components/Navbar";

export default function NameScreen() {
  return (
    <div>
      <Navbar />
      <h1>Name Screen</h1>
      <section>
        <img src={`${process.env.PUBLIC_URL}/img/placeholder.png`} />
        <input />
      </section>
    </div>
  );
}
