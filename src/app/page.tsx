import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-500 min-h-screen max-w-full flex justify-center items-center">
      <div className="bg-blue-300 w-[1024px] max-w-3xl p-4 h-[600px] flex justify-center items-center">
        <div className="bg-red-300 h-[300px] flex-1">
          <Image src={`/wolf.jpg`} alt="wolf" width={1024} height={1024} />
        </div>
        <div className="bg-green-300 h-[300px] flex-1">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
}
