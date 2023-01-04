import React from "react";

type Props = {
  isActive: boolean;
};

export default function Dot({ isActive }: Props) {
  return (
    <div
      className={`w-3 h-3 rounded-full bg-white ${isActive ? "bg-blue-500" : "bg-gray-300"}`}
    />
  );
}