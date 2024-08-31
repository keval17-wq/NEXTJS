"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

function LoginForm() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/components/VivaMQLogin/VivaMQLogin.jsx'); // Replace '/target-page' with the path you want to navigate to
  };

  return (
    <form className="flex flex-col items-center w-full">
      <h2 className="text-xl">Sign in with your account to access VivaMQ</h2>

      <InputField
        label="OneID"
        type="text"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd038429c6865ee7616434f1edfaa99d369581a83d2b09dd9eb43f6ce45fcad?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20"
        iconAlt="OneID icon"
      />
      <InputField
        label="Password"
        type="password"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27c4d2eca1401f8dcd4e18913e5f79c113f945e0303be84b5c2c193b95332a74?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20"
        iconAlt="Password icon"
      />
      <button
        className="flex flex-col items-center px-14 pt-5 pb-2.5 mt-7 mb-0 w-72 max-w-full text-base font-medium text-center text-white uppercase bg-red-700 rounded-[166px] max-md:px-5 max-md:mb-2.5"
        onClick={handleButtonClick}
      >
        <div className="flex flex-col w-[47px]">
          <span className="z-10">Log In</span>
        </div>
      </button>
    </form>
  );
}

export default LoginForm;