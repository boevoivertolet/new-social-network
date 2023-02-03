import React from "react";
import { LoginType } from "../Types/Types";
import styles from "./Login.module.css";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Input } from "../FormsControl/FormsControls";
import { requiredField } from "../../utils/validators/validators";

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    console.log('Rerender');

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={Input} validate={requiredField} />
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={Input} validate={requiredField} />
      </div>
      <div>
        <Field component={Input} type="checkbox" name={"rememberMe"}  />{" "}
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm<LoginFormDataType>({ form: "login" })(
  LoginForm
);
console.log(LoginReduxForm);

export const Login = () => {
  const onSubmit = (formData: LoginFormDataType) => {
    console.log(formData);
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

type LoginFormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
