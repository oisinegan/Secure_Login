import logo from "../images/Logo.png";
import { redirect } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body className="h-screen">
        <div className="flex flex-row justify-between bg-[#f5f5f5] border-b-2 border-black">
          <img
            className="object-cover h-28 w-28 rounded-full mx-8 my-2 "
            src={logo}
          ></img>
          <div className="grid place-items-center">
            <button class="bg-transparent hover:bg-[#28CC9E] text-[#28CC9E] font-semibold hover:text-white py-2 px-4 mx-8 border border-[#28CC9E] hover:border-transparent rounded">
              <a href="/"> Sign out</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-[#f5f5f5] h-full">
          <div className="bg-[#28CC9E]">
            {" "}
            <p className="indent-20 py-4 font-sans font-semibold text-white text-6xl ">
              Hello 'User'
            </p>
          </div>
          <div className=" bg-[#28CC9E] font-sans font-medium text-white px-20 py-2 text-xl border-b-2 border-black">
            This website has a secure login with other login function such as
            login with google, password hashing, forget password and more!
          </div>
          <div className=" my-16  text-center mx-20 grid gap-12 font-sans font-bold text-4xl text-[#28CC9E]">
            <p>First name: 'Fname'</p>
            <p>Last name: 'Lname'</p>
            <p>Email: 'email'</p>
          </div>
        </div>
      </body>
    </>
  );
}
