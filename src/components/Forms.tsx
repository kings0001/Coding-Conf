import React from "react";
import FileUpload from "./Fileuploader";
import { useNavigate } from "react-router-dom";

function Forms() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    username: "",
    avatar: "", // 🔥 new
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  // 🔥 Handle avatar file preview
  function handleFileSelect(fileUrl: string | null) {
    setFormData((prev) => ({
      ...prev,
      avatar: fileUrl || "",
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    navigate("/ticket", { state: formData });
  }

  return (
    <form
      className="flex flex-col gap-4 mt-10 items-center justify-start"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-lg mx-auto p-4 space-y-4">
        <FileUpload onFileSelect={handleFileSelect} /> {/* 🔥 updated */}

        {/* Full Name */}
        <label htmlFor="fullName" className="text-white text-sm font-medium">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          onChange={handleChange}
          value={formData.fullName}
          placeholder="Full Name"
          required
          className="w-full rounded-lg p-4 border border-white cursor-pointer"
        />

        {/* Email */}
        <label htmlFor="email" className="text-white text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="example@email.com"
          required
          className="w-full rounded-lg p-4 border border-white cursor-pointer"
        />

        {/* GitHub Username */}
        <label htmlFor="username" className="text-white text-sm font-medium">
          GitHub Username
        </label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={formData.username}
          placeholder="@yourusername"
          required
          className="w-full rounded-lg p-4 border border-white cursor-pointer"
        />

        <button
          type="submit"
          className="w-full max-w-lg h-14 bg-orange-600 text-2xl cursor-pointer font-semibold text-white rounded-md"
        >
          Generate my ticket
        </button>
      </div>
    </form>
  );
}

export default Forms;
