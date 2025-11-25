import React from "react";
import AuthForm from "../../components/forms/AuthForm";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={{ name: "", email: "", createPassword: "" }}
    />
  );
};

export default SignUp;
