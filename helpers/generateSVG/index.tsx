import { useRef } from "react";
import { renderToString } from "react-dom/server";
import pixelWidth from "string-pixel-width";
import { Props, SvgProps } from "./types";
import colorList from "css-color-names";

export const defaults: Props = {
  fontFamily: "helvetica",
  fontSize: 14,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 4,
  backgroundColor: "0794e0",
  color: "white",
  borderColor: "0b76b0",
  borderWidth: 0,
  padding: 0,
};

const correctColor = (color?: string) => {
  if (!color) return "red";
  return colorList.hasOwnProperty(color) ? color : `#${color}`;
};

const Svg: React.FC<SvgProps> = (props) => {
  const settings = { ...defaults, ...props };
  if (settings.padding) {
    settings.paddingBottom = Number(settings.padding);
    settings.paddingTop = Number(settings.padding);
    settings.paddingRight = Number(settings.padding) + 4;
    settings.paddingLeft = Number(settings.padding) + 4;
  }
  const textRef = useRef<SVGTextElement>(null);
  const textWidth = pixelWidth(`${settings.text}`, {
    font: settings.fontFamily,
    size: settings.fontSize,
  });
  const width =
    textWidth + Number(settings.paddingLeft) + Number(settings.paddingRight);
  const height =
    Number(settings.fontSize) +
    Number(settings.paddingTop) +
    Number(settings.paddingBottom);

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
        x={settings.borderWidth / 2}
        y={settings.borderWidth / 2}
        width={width - settings.borderWidth}
        height={height - settings.borderWidth}
        fill={correctColor(settings.backgroundColor)}
        rx={settings.borderRadius - settings.borderWidth / 4}
        ry={settings.borderRadius - settings.borderWidth / 4}
        strokeWidth={settings.borderWidth}
        stroke={correctColor(settings.borderColor)}
      />
      <text
        x={settings.paddingLeft}
        y={Number(settings.paddingTop) + 1}
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
