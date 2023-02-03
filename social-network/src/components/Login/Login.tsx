import React from "react";
import styles from "./Login.module.css";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Input } from "../FormsControl/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import login from "../Reducers/authReducer";

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  console.log("Rerender");

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          name={"login"}
          component={Input}
          validate={requiredField}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={requiredField}
        />
      </div>
      <div>
        <Field component={Input} type="checkbox" name={"rememberMe"} /> remember
        me
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
const Login = (props: any) => {
  const onSubmit = (formData: LoginFormDataType) => {
    props.login(formData);
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export type LoginFormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
type LoginPropsType={
  login: (formData: LoginFormDataType) => void
}

export default connect(null, { login })(Login);
