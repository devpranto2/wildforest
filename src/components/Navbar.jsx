"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mx-3 mt-4 bg-white px-4 py-2 shadow-sm">
      <div className="flex min-h-[34px] items-center justify-between">

        {/* ================= LEFT NAVIGATION ================= */}
        <div className="hidden items-center gap-5 text-[15px] font-semibold lg:flex">
          <Link
            href="/"
            className="text-[#009fc4] underline underline-offset-4"
          >
            Home
          </Link>

          <Link
            href="/destinations"
            className="text-gray-900 transition hover:text-[#009fc4]"
          >
            Destinations
          </Link>

          <Link
            href="/bookings"
            className="text-gray-900 transition hover:text-[#009fc4]"
          >
            My Bookings
          </Link>

          <Link
            href="/add-destination"
            className="text-gray-900 transition hover:text-[#009fc4]"
          >
            Add Destination
          </Link>
        </div>

        {/* ================= LOGO ================= */}
      
      <Image src='/assets/Wanderlast.png'
      alt="logo"
      height={200}
      width={150}></Image>

        {/* ================= RIGHT NAVIGATION ================= */}
        <div className="hidden items-center gap-5 text-[15px] font-semibold lg:flex">
          
          {/* Profile */}
          <Link
            href="/profile"
            className="flex items-center gap-1 text-gray-900 transition hover:text-[#009fc4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>

            Profile
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="text-gray-900 transition hover:text-[#009fc4]"
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="text-gray-900 transition hover:text-[#009fc4]"
          >
            Sign Up
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mt-4 border-t border-gray-200 pt-4 lg:hidden">
          <div className="flex flex-col gap-4 text-[14px] font-semibold">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#009fc4]"
            >
              Home
            </Link>

            <Link
              href="/destinations"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 transition hover:text-[#009fc4]"
            >
              Destinations
            </Link>

            <Link
              href="/bookings"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 transition hover:text-[#009fc4]"
            >
              My Bookings
            </Link>

            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 transition hover:text-[#009fc4]"
            >
              Admin
            </Link>

            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1 text-gray-900 transition hover:text-[#009fc4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>

              Profile
            </Link>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 transition hover:text-[#009fc4]"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 transition hover:text-[#009fc4]"
            >
              Sign Up
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;