import type React from "react";
import Fileuploader from "./Fileuploader";

function Forms() {

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle form submission logic here
  }
  return (
    <div className="relative">
      <img
        src="public/images/pattern-circle.svg"
        alt="pattern-lines-form"
        className="absolute top-2/5 left-6/6 z-10"
      />

      {/* Form */}
      <form 
        action=""
        className="flex flex-col gap-4 mt-10 items-center justify-start"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-lg mx-auto p-4 space-y-4">
          <Fileuploader />
          <label htmlFor="full-name" className="text-white text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full  rounded-lg p-4 border border-white cursor-pointer"
          />
          <label htmlFor="email" className="text-white text-sm font-medium">
            Email Address
          </label>
         
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full rounded-lg p-4 border border-white cursor-pointer"
          />
          <label htmlFor="username" className="text-white text-sm font-medium">
            GitHub Username
          </label>
          <input
            type="text"
            placeholder="@yourusername"
            className="w-full rounded-lg p-4 border border-white cursor-pointer"
          />

          <button className="w-full max-w-lg h-14 bg-orange-600 text-2xl cursor-pointer font-semibold text-white rounded-md">
            Generate my ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
