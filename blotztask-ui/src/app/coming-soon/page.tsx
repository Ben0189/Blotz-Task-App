"use client"; 
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { H1, H3 } from "@/components/ui/heading-with-anchor";
import Link from "next/link";

export default function Home() {
  const[showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setShowText(true);
    },200);

    return() => clearTimeout(timer);
  },[]);


  return (
    <>

      
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-88">
      <div className="flex p-3px">
        <div className= "flex-1 mr-[50px]">
        <div className ="text-left text-6xl font-bold">

          <p>&#x2692; New Website Coming Soon...  </p>

        </div>
        </div>
      </div>
    

      <div className= "flex justify-between p-1 md:p-8">
        <div className="text-left font-serif text-4xl italic text-white-800 animate-zoomOut">

          We are currently working on this page. Please check back later. 
            
        </div>
      </div>


      <div className ="mt-8 flex flex-col md:flex-row">
        <Link href="/">
          <Button>
            <span>
              Return Home
            </span>
          </Button>
        </Link>
      </div>


      <div className= "fixed top-[350px] left-[95px]">
         <div style={{ marginRight: '0px' }}>
          <img
          src="/comingsoon.webp" 
          alt="An image of a coming soon page"
          className="w-[640px] h-auto object-cover"
          />
        </div>
      </div>
        


      


    </main>
    </>
  );
}
