import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-green-300 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-orange-200 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-xl  text-gray-700 text-center font-semibold">
              Login
            </label>
            <form method="#" action="#" className="mt-10">
              <div>
                <input
                  type="username"
                  placeholder="Masukkan Username"
                  className="mt-1 block w-full p-2 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Masukkan Password"
                  className="mt-1  p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button className="bg-orange-300 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  SPJ Dev
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}