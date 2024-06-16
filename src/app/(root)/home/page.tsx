import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="navLeft">
          <Image
            alt="main_logo"
            src={"/stellar.png"}
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="navRight flex gap-3">
          <Link href={"./home"}>Home</Link>
          <Link href={"./aboutus"}>About us</Link>
        </div>
      </div>

      <div className="body flex flex-col gap-5 mt-20 ">
        <h2>Edtech News</h2>
        <div className="mx-auto w-[80%] ">
          <div className="flex justify-between">
            <Image
              alt="main_logo"
              src={"/stellar.png"}
              width={200}
              height={100}
            ></Image>
            <Image
              alt="main_logo"
              src={"/stellar.png"}
              width={200}
              height={100}
            ></Image>
            <Image
              alt="main_logo"
              src={"/stellar.png"}
              width={200}
              height={100}
            ></Image>
          </div>
        </div>
      </div>

      <div className="beforeFooter mt-20">
        <div className="w-[80%] mx-auto flex justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl">About</h2>
            <p>What We Do</p>
            <p>Connect With Us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Partners</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl">About</h2>
            <p>What We Do</p>
            <p>Connect With Us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Partners</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl">About</h2>
            <p>What We Do</p>
            <p>Connect With Us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </>
  );
}
