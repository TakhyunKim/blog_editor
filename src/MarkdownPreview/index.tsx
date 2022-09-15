import MarkdownViewer from "./MarkdownViewer";
import MarkdownTypingArea from "./MarkdownTypingArea";

import styles from "./MarkdownPreview.module.css";

const MarkdownPreview = () => {
  return (
    <section className={styles.container}>
      <MarkdownTypingArea />
      <MarkdownViewer />
    </section>
  );
};

export default MarkdownPreview;
