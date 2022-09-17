import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./MdViewer.module.css";

interface MdViewerProps {
  value: string;
}

const MdViewer = ({ value }: MdViewerProps) => {
  return (
    <article className={styles.container}>
      <ReactMarkdown children={value} rehypePlugins={[rehypeRaw]} />
    </article>
  );
};

export default MdViewer;
