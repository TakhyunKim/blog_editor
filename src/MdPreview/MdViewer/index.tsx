import ReactMarkdown from "react-markdown";

import styles from "./MdViewer.module.css";

interface MdViewerProps {
  value: string;
}

const MdViewer = ({ value }: MdViewerProps) => {
  return (
    <article className={styles.container}>
      <ReactMarkdown>{value}</ReactMarkdown>
    </article>
  );
};

export default MdViewer;
