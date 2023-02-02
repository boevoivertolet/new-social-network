import { Field, InjectedFormProps, reduxForm } from "redux-form";

 const AddMEssageForm: React.FC<InjectedFormProps<AddMEssageFormDataType>> = (
    props
  ) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={"textarea"}
            name={"newMEssageBody"}
            placeholder={"Enter your message"}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  };

export const AddMEssageFormRedux = reduxForm<AddMEssageFormDataType>({
    form: "dialogAddMessageForm",
  })(AddMEssageForm);

export  type AddMEssageFormDataType = {
    newMEssageBody: string;
  };
