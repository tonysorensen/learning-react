import React from "react";
import HelloWorld from "../components/HelloWorld";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Home</h1>
      <HelloWorld name="Tony" />
    </div>
  );
}
