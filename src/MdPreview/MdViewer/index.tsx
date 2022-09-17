import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { SynataxHighlighter } from "./CustomSyntaxHighlighter";

import styles from "./MdViewer.module.css";

interface MdViewerProps {
  value: string;
}

const MdViewer = ({ value }: MdViewerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.html_wrapper}>
        <ReactMarkdown
          children={value}
          rehypePlugins={[rehypeRaw]}
          components={SynataxHighlighter}
        />
      </div>
    </div>
  );
};

export default MdViewer;
