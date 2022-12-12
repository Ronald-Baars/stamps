/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Home.module.css";

interface ExampleProps {
  src: string;
  extensive?: boolean;
}
export const Example: React.FC<ExampleProps> = ({ src, extensive }) => {
  const domain = "https://gh-stamps.vercel.app/api/";

  return (
    <section className={styles.example}>
      <div className={styles.left}>
        {extensive ? (
          <>
            <h4>Markdown</h4>
            <code className={styles.code}>
              <span>![Example button](</span>
              {domain}
              {src}
              <span>)</span>
            </code>

            <h4>Markdown Link</h4>
            <code className={styles.code}>
              <span>[![Example button](</span>
              {domain}
              {src}
              <span>)](https://www.example.com/)</span>
            </code>

            <h4>HTML (also works in Markdown)</h4>
            <code className={styles.code}>
              <span>{`<img src="`}</span>
              {domain}
              {src}
              <span>{`" alt="Example button" />`}</span>
            </code>

            <h4>HTML Link</h4>
            <code className={styles.code}>
              <span>
                {`<a href="https://www.example.com/">`}
                <br />
                &nbsp;&nbsp;{`<img src="`}
              </span>
              {domain}
              {src}
              <span>
                {`" alt="Example button" />`}
                <br />
                {`</a>`}
              </span>
            </code>
          </>
        ) : (
          <code className={styles.code}>
            <span>{domain}</span>
            {src}
          </code>
        )}
      </div>
      <aside className={styles.preview}>
        {domain && <img src={`${domain}${src}`} alt="Example button" />}
      </aside>
    </section>
  );
};
