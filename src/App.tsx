// import React from 'react'
import Forms from "./components/Forms";
import Header from "./components/Header";
import Info from "./components/Info";
function App() {
  return (
    <div className='relative overflow-hidden bg-[url("/images/background-desktop.png")] bg-cover bg-center min-h-screen w-full text-white '>
      <img
        src="/images/pattern-lines.svg"
        alt="pattern-lines"
        className="absolute top-0 left-0 w-full h-full z-10"
      />

       <img
        src="public/images/pattern-circle.svg"
        alt="pattern-lines-form"
        className="absolute -top-20 left-0 z-10"
      />
     
      {/* Desktop SVG */}
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="pattern-squiggly-line-bottom-desktop"
        className="hidden md:block md:absolute md:bottom-0 md:left-0 z-10"
      />

      {/* Mobile/*/}
      <img
        src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        alt="pattern-squiggly-line-bottom-mobile"
        className="block md:hidden absolute -bottom-16 left-0 z-10"
      />

      <img
        src="/images/pattern-squiggly-line-top.svg"
        alt="pattern-squiggly-line"
        className="absolute top-10 right-0 z-10"
      />
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 pt-10 md:pt-10 pb-20 flex flex-col items-center justify-center">
        <Header />
        <Info />
        <Forms />
      </div>
    </div>
  );
}

export default App;
