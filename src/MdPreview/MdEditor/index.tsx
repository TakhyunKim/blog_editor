import type { ChangeEvent } from "react";

import styles from "./MdEditor.module.css";

interface MdEditorProps {
  value: string;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MdEditor = ({ value, onChangeTextArea }: MdEditorProps) => {
  return (
    <article className={styles.container}>
      <textarea
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder="Please enter Markdown text"
        className={styles.text_area}
        onChange={onChangeTextArea}
        value={value}
      />
    </article>
  );
};

export default MdEditor;
