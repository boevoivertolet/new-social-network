import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../FormsControl/FormsControls";


const maxLengthCreator10 = maxLengthCreator(10)

const AddMEssageForm: React.FC<InjectedFormProps<AddMEssageFormDataType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLengthCreator10]}
          component={Textarea}
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
  form: "AddMessageForm",
})(AddMEssageForm);

export type AddMEssageFormDataType = {
  newMEssageBody: string;
};
