import MdViewer from "./MdViewer";
import MdEditor from "./MdEditor";

import styles from "./MdPreview.module.css";

const MdPreview = () => {
  return (
    <section className={styles.container}>
      <MdEditor />
      <MdViewer />
    </section>
  );
};

export default MdPreview;
