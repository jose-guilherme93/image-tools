"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imglyRemoveBackground from "@imgly/background-removal";


function BackgroundRemover() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    if (event.target.files && event.target.files[0]) {
      setIsLoading(true)
      const file = event.target.files[0];
      imglyRemoveBackground(file).then((blob: Blob) => {
        const url = URL.createObjectURL(blob);
       setImage(url);
      });
    }
  }
  
  return (
    <div className='w-screen h-screen'>
      <input type="file" onChange={handleFileChange} />
      {isLoading ? "loading aguarde" : ''}
      {image && <Image width={400} height={400} quality={100} src={image} alt="Imagem sem fundo" />}
      {image && <button >
        <a target='__blank' href={image}>baixar</a> 
        </button>}
      
    </div>
  );
}

export default BackgroundRemover