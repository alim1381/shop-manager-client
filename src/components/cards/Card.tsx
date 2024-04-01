import React from "react";

function Card({
  title,
  amount,
  icon,
}: {
  title: string;
  amount: number;
  icon: any;
}) {
  return (
    <div className="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
      {icon}
      <div>
        <p className="mb-2 text-sm font-medium  text-gray-400">{title}</p>
        <p className="text-lg font-semibold text-gray-200">{amount}</p>
      </div>
    </div>
  );
}

export default Card;
