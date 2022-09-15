import ReactMarkdown from "react-markdown";

import styles from "./MdViewer.module.css";

const mdExample = `This **word** is bold.

![image alt text](image url)

~~~js
console.log('check value')
~~~
`;

const MdViewer = () => {
  return (
    <article className={styles.container}>
      <ReactMarkdown>{mdExample}</ReactMarkdown>
    </article>
  );
};

export default MdViewer;
