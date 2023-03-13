import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../FormsControl/FormsControls";


const maxLengthCreator10 = maxLengthCreator(10)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLengthCreator10]}
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({
  form: "AddMessageForm",
})(AddMessageForm);

export type AddMessageFormDataType = {
  newMessageBody: string;
};
