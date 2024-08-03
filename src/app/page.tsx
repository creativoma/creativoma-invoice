'use client'

import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './component';

const App = () => {
  const [title, setTitle] = useState('Don Quijote de la Mancha');
  const [author, setAuthor] = useState('Miguel de Cervantes');
  const [content, setContent] = useState('En un lugar de la Mancha, de cuyo nombre no quiero acordarme...');

  return (
    <div className="flex">
      <form className='w-[calc(50vw)] h-screen p-4'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Autor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Contenido
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </form>
      <PDFViewer className='w-[calc(50vw)] h-screen'>
        <MyDocument title={title} author={author} content={content} />
      </PDFViewer>
    </div>
  );
};

export default App;