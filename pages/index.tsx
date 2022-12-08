/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { allowedFonts } from "helpers/generateSVG/types";
import { Example } from "components/Example";
import { Playground } from "components/Playground";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github readme buttons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Github readme buttons</h1>

        <p className={styles.description}>
          Free to use, retina-ready, customizable buttons for any MarkDown file.
          Follow the guide below, or use the button playground to create your
          style. You can use the buttons anywhere on the web, from your blog to
          GitHub readme files. The buttons are fully customizable by an
          easy-to-use API.
        </p>

        <p>
          <a href="https://baars.design/" rel="noreferrer" target="_blank">
            <img
              src="/api/v1/About%20me?backgroundColor=0b76b0"
              alt="About me"
            />
          </a>
          &nbsp;
          <a
            href="https://github.com/Ronald-Baars/stamps/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/api/v1/GitHub%20repo?backgroundColor=white&borderWidth=1&color=0b76b0"
              alt="Github repo"
            />
          </a>
        </p>

        <h1>Basics</h1>
        <p>
          The most basic use case. Just choose the text and implement the tag in
          your MD file. Both of the examples below are usable in your markdown
          file, and both will give you the same result.
        </p>
        <Example src="Example" extensive />

        <h1>Configure</h1>
        <Playground />

        <h1>Available parameters</h1>
        <p>The following parameters are accepted:</p>

        <section>
          <h2>
            <code>
              <span>?</span>fontFamily<span>=helvetica</span>
            </code>
          </h2>
          <p>
            You can change the font by using the fontFamily parameter. Accepted
            values are:
            <br />
            {Object.keys(allowedFonts)
              .filter((v) => isNaN(Number(v)))
              .map((font) => (
                <>
                  <code key={font}>{font}</code>,{" "}
                </>
              ))}
            <br />
            <small>
              Make sure to replace spaces in the font&apos;s names with{" "}
              <code>%20</code>.
            </small>
          </p>
          <Example src="Example?fontFamily=impact" />
        </section>

        <section>
          <h2>
            <code>
              <span>?</span>fontSize<span>=14</span>
            </code>
          </h2>
          <p>Change the font size by using this parameter.</p>
          <Example src="Example?fontSize=30" />
        </section>

        <section>
          <h2>
            <code>
              <span>?</span>borderRadius<span>=4</span>
            </code>
          </h2>
          <p>Change the rounded corners by using this parameter.</p>
          <Example src="Example?borderRadius=16" />
        </section>

        <section>
          <h2>
            <code>
              <span>?</span>backgroundColor<span>=0794e0</span>
            </code>
          </h2>
          <p>Change the background color by using this parameter.</p>
          <Example src="Example?backgroundColor=0C7C59" />
        </section>

        <section>
          <h2>
            <code>
              <span>?</span>color<span>=white</span>
            </code>
          </h2>
          <p>
            Change the text color by using this parameter. Accepted values are
            html named colors and hex values.
          </p>
          <Example src="Example?color=BAC1B8" />
        </section>

        <section>
          <h2>
            <code>
              <span>?</span>borderColor<span>=0b76b0</span>
            </code>{" "}
          </h2>
          <h2>
            <code>
              <span>?</span>borderWidth<span>=0</span>
            </code>{" "}
          </h2>
          <p>
            Change the border by using the <code>borderColor</code> and{" "}
            <code>borderWidth</code> parameters.
          </p>
          <Example src="Example?borderWidth=20" />
          <Example src="Example?borderWidth=3&borderColor=58A4B0" />
        </section>

        <h1>Examples</h1>
        <Example src="Example?borderWidth=2&borderColor=2B303A&backgroundColor=white&color=2B303A" />
        <Example src="Example?backgroundColor=BAC1B8&color=2B303A&borderRadius=0&fontSize=20&fontFamily=courier%20new" />
        <Example src="Example?backgroundColor=0C7C59&color=white&borderRadius=50&fontFamily=andale%20mono" />
        <Example src="Button%20with%20a%20very%20long%20text%20in%20it?backgroundColor=eee&borderWidth=1&borderColor=ccc&color=000" />
        <Example src="Example?borderRadius=16&fontFamily=comic%20sans%20ms&backgroundColor=FF7F51" />

        <h1>Combining parameters</h1>
        <p>
          Always write a <code>?</code> between the content and the first
          parameter. If you use more than one parameter, you separate them by
          using <code>&</code>.
        </p>

        <h1>Colors</h1>
        <p>
          Accepted values are html named colors and hex values.
          <small>Hex values should be written without the hashtag.</small>
          <b>Some examples:</b>
          <br />
          Named colors: <code>red</code>, <code>teal</code>, <code>orange</code>
          <br />
          Hex colors: <code>C0FFEE</code>, <code>DE1E7E</code>,{" "}
          <code>BADA55</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noreferrer" href="https://www.baars.design/">
          Made with <span>♥</span> by baars.design
        </a>
      </footer>
    </div>
  );
};

