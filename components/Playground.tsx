/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { domain } from "./Example";

export const Playground: React.FC = () => {
  const [settings, setSettings] = useState({
    backgroundColor: "c2e1ff",
    color: "1d568b",
    fontSize: "14",
    borderWidth: "1",
    borderColor: "90bee9",
  });
  const [text, setText] = useState("Example");

  const url = `${domain}${text === "" ? "%20" : text}?${Object.entries(settings)
    .map(
      ([key, value]: [key: string, value: string | number]) => `${key}=${value}`
    )
    .join("&")}`;

  return (
    <div className={styles.playground}>
      <div className={styles.playgroundLeft}>
        <div className={styles.playgroundPreview}>
          <img src={url} alt="Changable preview of a button" />
        </div>
        <code className={styles.playgroundCode}>{url}</code>
      </div>
      <div className={styles.playgroundSidebar}>
        <label>
          <strong>Text:</strong> {text}
          <input
            type="text"
            maxLength={40}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          <strong>Font size:</strong> {settings.fontSize}px
          <input
            type="range"
            min="1"
            max="100"
            value={settings.fontSize}
            onChange={(e) =>
              setSettings({ ...settings, fontSize: e.target.value })
            }
          />
        </label>
        <label>
          <strong>Border size:</strong> {settings.borderWidth}px
          <input
            type="range"
            min="0"
            max="10"
            value={settings.borderWidth}
            onChange={(e) =>
              setSettings({ ...settings, borderWidth: e.target.value })
            }
          />
        </label>
        <label>
          <strong>Border color:</strong> #{settings.borderColor}
          <input
            type="color"
            value={`#${settings.borderColor}`}
            onChange={(e) =>
              setSettings({
                ...settings,
                borderColor: e.target.value.replace("#", ""),
              })
            }
          />
        </label>
        <label>
          <strong>Text color:</strong> #{settings.color}
          <input
            type="color"
            value={`#${settings.color}`}
            onChange={(e) =>
              setSettings({
                ...settings,
                color: e.target.value.replace("#", ""),
              })
            }
          />
        </label>
        <label>
          <strong>Background color:</strong> #{settings.backgroundColor}
          <input
            type="color"
            value={`#${settings.backgroundColor}`}
            onChange={(e) =>
              setSettings({
                ...settings,
                backgroundColor: e.target.value.replace("#", ""),
              })
            }
          />
        </label>
      </div>
    </div>
  );
};
