import Layout from "../components/Layout";
import Header from "../components/Header";
import defaultAvatar from "../assets/images/image-avatar.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Ticket() {
  const fullDate = new Date().toDateString();
  const location = "London, UK";

  // Grab state from navigation
  const { state } = useLocation();
  const navigate = useNavigate();

  const formData = state as {
    fullName: string;
    email: string;
    username: string;
    avatar?: string; // ✅ include avatar
  } | null;

  // Redirect if user lands on /ticket without filling the form
  useEffect(() => {
    if (!formData) {
      navigate("/", { replace: true });
    }
  }, [formData, navigate]);

  if (!formData) return null;

  return (
    <Layout>
      <Header />

      {/* Heading */}
      <div className="text-center mt-10">
        <p className="font-bold text-4xl max-w-4xl">
          Congrats,{" "}
          <span className="bg-gradient-to-r from-[#f78ca0] to-[#fbc2eb] bg-clip-text text-transparent">
            {formData.fullName}!
          </span>
          <br /> your ticket is ready
        </p>
        <p className="mt-5 max-w-md mx-auto text-lg font-normal">
          We've emailed your ticket to<br />
          <span className="bg-gradient-to-r from-[#f78ca0] to-[#fbc2eb] bg-clip-text text-transparent">
            {formData.email}
          </span>
          , and we will send updates in <br /> the run up of the event.
        </p>
      </div>

      {/* Ticket Content */}
      <div className="flex relative items-center p-4 mt-10">
        <img
          src="/images/pattern-ticket.svg"
          alt=""
          className="absolute -top-3 left-0"
        />

        {/* Left section */}
        <div className="border-r-2 pr-10 border-none">
          <img
            src="/images/logo-full.svg"
            alt="logo-full"
            className="mx-auto"
          />
          <h2 className="mt-1 text-xs text-right">
            {fullDate} / {location}
          </h2>

          <div className="flex items-center gap-4 mt-6">
            {/* Avatar */}
            <img
              src={formData.avatar || defaultAvatar} // ✅ use uploaded image or fallback
              alt="avatar"
              className="w-10 h-10 rounded object-cover"
            />

            {/* User Info */}
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">{formData.fullName}</p>
              <div className="flex gap-1 items-center">
                <img
                  src="/images/icon-github.svg"
                  alt="github-icon"
                  className="w-5 h-5"
                />
                <p className="text-sm font-light">@{formData.username}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotated Ticket */}
        <p className="transform -rotate-90 text-xl font-bold pl-4">Ticket</p>
      </div>
    </Layout>
  );
}

export default Ticket;
