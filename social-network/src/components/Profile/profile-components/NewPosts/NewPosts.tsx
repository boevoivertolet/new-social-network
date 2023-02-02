import React from "react";
import styles from "./NewPosts.module.css";
import { NewPostType } from "../../../Types/Types";
import {
  AddMEssageFormDataType,
  AddMEssageFormRedux,
} from "../../../Dialogs/dialogs-components/AddMessageForm";

export const NewPosts = (props: NewPostType) => {
  const addPost = (values: AddMEssageFormDataType) => {
    props.addPost(values.newMEssageBody);
  };

  return (
    <div className={styles.newPosts}>
      <div>
        <AddMEssageFormRedux onSubmit={addPost} />
      </div>
    </div>
  );
};
