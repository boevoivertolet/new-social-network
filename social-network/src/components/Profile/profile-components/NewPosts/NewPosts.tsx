import React from "react";
import styles from "./NewPosts.module.css";
import { NewPostType } from "../../../Types/Types";
import {
  AddMessageFormDataType,
  AddMessageFormRedux

} from '../../../Dialogs/dialogs-components/AddMessageForm';

export const NewPosts = (props: NewPostType) => {
  const addPost = (values: AddMessageFormDataType) => {
    props.addPost(values.newMessageBody);
  };

  return (
    <div className={styles.newPosts}>
      <div>
        <AddMessageFormRedux onSubmit={addPost} />
      </div>
    </div>
  );
};
