"use client";

import { JokeForm } from "@/app/(root)/_components/joke-form";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";

const Modal = ({
  table,
  type,
  id,
  data,
}: {
  table: "joke";
  type: "create" | "update";
  data?: any;
  id?: string | number;
}) => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };

  const forms: {
    [key: string]: (
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
      type: "create" | "update",
      data?: any
    ) => JSX.Element;
  } = {
    joke: (setOpen, type, data) => (
      <JokeForm data={data} setOpen={setOpen} type={type} />
    ),
  };

  const Form = () => {
    return type === "create" || type === "update" ? (
      forms[table](setOpen, type, data)
    ) : (
      <>Form not found</>
    );
  };

  return (
    <>
      {open && (
        <div className="w-screen min-h-screen fixed top-0 left-0 bottom-0 bg-gray-200/70 bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] overflow-hidden">
            <div className="mt-3">
              <Form />
            </div>
            <div
              className="absolute top-4 right-4"
              onClick={() => handleClose()}
            >
              <X width={18} height={18} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
