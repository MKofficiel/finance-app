import { useForm } from "react-hook-form";

const AuthForm = ({ formType, defaultValues, onSubmit }) => {
  const { register, handleSubmit, watch } = useForm();

  const headerText = formType === "SIGN_IN" ? "Login" : "Sign Up";
  return (
    <form>
      {Object.keys(defaultValues).map((field) => (
        <div>
          <label htmlFor="">{field.name} mk</label>
        </div>
      ))}
    </form>
  );
};

export default AuthForm;
