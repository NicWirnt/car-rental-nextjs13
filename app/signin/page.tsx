"use client";

import React, { useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../src/amplifyconfiguration.json";
import Link from "next/link";
Amplify.configure(config);
const page = ({ signOut, user }: WithAuthenticatorProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const services = {
    async handleSignUp(formData: any) {
      let { username, password, attributes } = formData;
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();

      return console.log(username, attributes);
      const signUpResult = Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
      return signUpResult;
    },
  };

  return (
    <div className="overflow-hidden py-12 px-12">
      <Authenticator services={services} initialState="signUp">
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    </div>
  );
};

export default page;
