"use client";

import React, { useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../src/amplifyconfiguration.json";
Amplify.configure(config);
const SignInForm = ({
  signOut,
  user,
}: {
  signOut: WithAuthenticatorProps;
  user: WithAuthenticatorProps;
}) => {
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
    <div className="overflow-hidden py-12 px-12">
      <Authenticator services={services} initialState="signUp">
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    </div>
  );
};

export default SignInForm;
