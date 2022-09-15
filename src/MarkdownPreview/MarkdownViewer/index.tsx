import ReactMarkdown from "react-markdown";

import styles from "./MarkdownViewer.module.css";

const mdExample = `This **word** is bold.

![image alt text](image url)

~~~js
console.log('check value')
~~~
`;

const MarkdownViewer = () => {
  return (
    <article className={styles.container}>
      <ReactMarkdown>{mdExample}</ReactMarkdown>
    </article>
  );
};

export default MarkdownViewer;
