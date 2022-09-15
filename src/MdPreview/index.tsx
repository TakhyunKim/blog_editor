import { useState } from "react";
import type { ChangeEvent } from "react";

import MdViewer from "./MdViewer";
import MdEditor from "./MdEditor";

import styles from "./MdPreview.module.css";

const MdPreview = () => {
  const [mdContents, setMdContents] = useState<string>("");

  const updateMdContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMdContents(event.target.value);
  };

  return (
    <section className={styles.container}>
      <MdEditor value={mdContents} onChangeTextArea={updateMdContents} />
      <MdViewer value={mdContents} />
    </section>
  );
};

export default MdPreview;
