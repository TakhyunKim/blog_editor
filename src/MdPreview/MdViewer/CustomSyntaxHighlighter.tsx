import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { NormalComponents } from "react-markdown/lib/complex-types";

type CSSProperties = /*unresolved*/ any;

const vsDarkMode = vscDarkPlus as
  | { [key: string]: React.CSSProperties }
  | undefined
  | CSSProperties;

export const SynataxHighlighter: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        style={vsDarkMode}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
