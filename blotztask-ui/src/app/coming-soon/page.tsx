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
      <style>{`
        @keyframes zoomOut {
          0% {
            transform: scale(0.5);
            opacity: 2;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        .animate-zoomOut {
          animation: zoomOut 3.5s ease forwards;
        }
      `}</style>
      
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>
        <div style={{ flex: 1, marginRight: '500px' }}>
        <div className="text-left text-6xl font-bold text-white-800">

          <p>&#x2692; New Website Coming Soon...  </p>

          </div>
        </div>
      </div>
    

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>
        <div style={{ flex: 1, marginRight: '520px' }}>
          {showText &&(
          <div 
            className="text-left font-serif text-4xl italic text-white-800 animate-zoomOut"
            style={{ animation: 'zoomOut 3.5s ease forwards',}}>

            We appreciate your patience :D🌿
            
          </div>
          )}
        </div>
      </div>



      <div style={{ position: 'fixed', top: '150px', right: '10px'}}>
         <div style={{ marginRight: '0px' }}>
        <img
          src="/comingsoon.webp" 
          alt="An image of a yellow flower"
          width="540" 
          style={{ objectFit: 'cover' }}
        />
      </div>
      </div>
        


      <H3 className="text-lg font-light text-muted-foreground sm:text-xl fixed bottom-24">
        We are currently working on this page. Please check back later. 
      </H3>

      <div className="mt-16 flex flex-col gap-3 md:flex-row fixed bottom-12">
        <Link href="/">
          <Button asChild>
            <span>
              Return Home
            </span>
          </Button>
        </Link>
      </div>

      


    </main>
    </>
  );
}
