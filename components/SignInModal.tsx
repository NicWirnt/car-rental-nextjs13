"use client";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { Authenticator } from "@aws-amplify/ui-react";

const SignInModal = ({ isOpen, onClose }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const services = {
    async handleSignUp(formData: any) {
      let { username, password, attributes } = formData;
      // custom username
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();
      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    },
  };
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"} bg-neutral-300`}>
      <div className="modal-content">
        <button
          className="close-button text-lg bg-white rounded-lg p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-blue-200 w-[50%] p-10 rounded-lg">
            <Authenticator services={services} initialState="signUp">
              {({ signOut }) => <button onClick={signOut}>Sign out</button>}
            </Authenticator>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
