/* eslint-disable @next/next/no-page-custom-font */
import { useRef } from "react";
import { renderToString } from "react-dom/server";
import pixelWidth from "string-pixel-width";
import { Props, SvgProps } from "./types";
import colorList from "css-color-names";

const defaults: Props = {
  fontFamily: "helvetica",
  fontSize: 14,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 4,
  backgroundColor: "3486eb",
  color: "white",
};

const correctColor = (color?: string) => {
  if (!color) return "red";
  return colorList.hasOwnProperty(color) ? color : `#${color}`;
};

const Svg: React.FC<SvgProps> = (props) => {
  console.log(props);
  const settings = { ...defaults, ...props };
  console.log(settings);
  const textRef = useRef<SVGTextElement>(null);
  const textWidth = pixelWidth(`${settings.text}`, {
    font: settings.fontFamily,
    size: settings.fontSize,
  });
  const width = textWidth + settings.paddingLeft + settings.paddingRight;
  const height =
    Number(settings.fontSize) + settings.paddingTop + settings.paddingBottom;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ cursor: "pointer" }}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            svg, text {
              font-family: "${settings.fontFamily}", helvetica;
            }
          `,
          }}
        />
      </defs>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={correctColor(settings.backgroundColor)}
        rx="4"
      />
      <text
        x={settings.paddingLeft}
        y={settings.paddingTop + 1}
        textAnchor="start"
        alignmentBaseline="hanging"
        ref={textRef}
        fill={correctColor(settings.color)}
        style={{
          fontFamily: `${settings.fontFamily}, helvetica`,
          fontSize: settings.fontSize,
          userSelect: "none",
          cursor: "inherit",
          pointerEvents: "none",
        }}
      >
        {settings.text}
      </text>
    </svg>
  );
};

export default function generateSVG(props: SvgProps) {
  return renderToString(<Svg {...props} />);
}
