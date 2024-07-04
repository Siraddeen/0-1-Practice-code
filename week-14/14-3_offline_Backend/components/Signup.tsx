"use client";
import { signup } from "@/app/actions/user";
import { useState } from "react";

export default function Signup() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center flex-col h-screen bg-gradient-to-r from-blue-200 to-red-200">
      <div className="flex justify-center">
        <div className="p-4 border rounded pb-4 ">
          <input
            onChange={(e) => {
              setUname(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            placeholder="your name"
          />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="p-2 m-2 
            "
            placeholder="your password"
          />
          <br />
          <div
            className="bg-gradient-to-r from-green-100 to-orange-100
           hover:scale-105 duration-200 rounded-lg flex flex-col justify-center items-center"
          >
            {" "}
            <button
              onClick={async () => {
                // await axios.post("http://localhost:3000/api/user", {
                //   uname,
                //   password,
                // });
                signup(uname, password);
              }}
              className="mt-4 flex justify-center"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
