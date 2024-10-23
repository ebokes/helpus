import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] w-[95%] md:w-[90%]">
        <Navbar />
        <div>Home</div>
        <p>Showing results for hungry african children</p>
      </div>
    </div>
  );
}
