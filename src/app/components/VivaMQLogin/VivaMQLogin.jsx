"use client";
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

function VivaMQLogin() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col pb-64 w-full min-h-[1024px] max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e011d3a23e4adca1231501de3ecda307bcd57388842ae7b3745c0ecd22bdb6a?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <Header />
        <LoginForm />
      </div>
    </main>
  );
}

export default VivaMQLogin;
