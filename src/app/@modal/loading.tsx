import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-opacity-50 backdrop-blur grid place-items-center">
      <h3 className="text-amber-700 text-4xl font-bold tracking-tighter w-fit h-fit">
        Loading...
      </h3>
    </div>
  );
};

export default Loading;
