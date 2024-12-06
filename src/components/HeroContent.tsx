import React, { useState, useEffect } from 'react';
import { ServiceIcon } from './ServiceIcon';

export function HeroContent() {
  const [textOpacity, setTextOpacity] = useState('opacity-100');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextOpacity('opacity-100');
    }, 7000); // Ensure text is fully visible after video transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
      <header className={`space-y-8 mb-16 transition-opacity duration-1000 ${textOpacity}`}>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
          <span className="text-white [text-shadow:_4px_4px_40px_rgb(255_255_255_/_50%)] block mb-4">
            Taking Your
          </span>
          <span className="inline-block bg-white text-black px-6 py-2 transform -skew-x-12 shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-4">
            Complexity
          </span>
          <span className="text-white [text-shadow:_4px_4px_40px_rgb(255_255_255_/_50%)] block">
            Making it Simple
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold leading-relaxed [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-white/10">
          With over 15 years of global media experience spanning Hollywood to Atlanta, South America, and Hong Kong, 
          we bring a world-class perspective to every project. From blockbuster productions in Los Angeles to dynamic 
          ventures abroad, our expertise lies in delivering innovative solutions across diverse cultural and professional landscapes.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <ServiceIcon 
          imageUrl="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_1200/v1641567315/blog-post-open-graph-covers/000/004/733/4733-original.jpg"
          label="Unreal Engine" 
          imageClassName="brightness-0 invert"
        />
        <ServiceIcon 
          imageUrl="https://cdn.prod.website-files.com/625447c67b621ab49bb7e3e5/6595a3f16ea6fac5e47d75f3_ollama.png"
          label="AI/LLMs" 
        />
        <ServiceIcon 
          imageUrl="https://www.svgrepo.com/show/1699/web-development.svg"
          label="Web Development" 
          imageClassName="invert"
        />
      </section>

      <footer className="text-xl text-gray-200 max-w-2xl mx-auto italic font-medium">
        <blockquote className="[text-shadow:_0_0_20px_rgba(255,255,255,0.3)]">
          "Whether it's mastering cutting-edge technology or adapting to the unique demands of international markets, 
          we thrive on crafting exceptional results that leave a lasting impact."
        </blockquote>
      </footer>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 text-white/50 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}