"use client";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";
import { useState } from "react";
import SignInModal from "./SignInModal";

const Navbar = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  return (
    <>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="logo.svg"
              alt="Car Hub Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <Link href="signin">
            <button
              type="button"
              className="text-primary-blue rounded-full bg-white min-w-[130px]"
              onClick={() => setIsSignInModalOpen(!isSignInModalOpen)}
            >
              Sign in
            </button>
          </Link>
        </nav>
        {/* <SignInModal
          isOpen={isSignInModalOpen}
          onClose={() => setIsSignInModalOpen(false)}
        /> */}
      </header>
    </>
  );
};

export default Navbar;
