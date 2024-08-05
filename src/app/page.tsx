"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MyDocument from "@/components/pdf/my-document";
import { Input } from "@/components/ui/input";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  },
);

const App = () => {
  const [isClient, setIsClient] = useState(false);
  const [args, setArgs] = useState({
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    content: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setArgs((prevArgs) => ({
      ...prevArgs,
      [id]: value,
    }));
  };

  return (
    <div className="flex">
      <form className="w-[calc(50vw)] h-screen p-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Título
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={args.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Autor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            value={args.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Contenido
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            value={args.content}
            onChange={handleInputChange}
          />
        </div>
        <Input type="email" placeholder="Email" />
      </form>
      {isClient && (
        <PDFViewer className="w-[calc(50vw)] h-screen">
          <MyDocument args={args} />
        </PDFViewer>
      )}
    </div>
  );
};

export default App;
