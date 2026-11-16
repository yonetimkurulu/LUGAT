import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#5B141E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          borderRadius: "6px",
          fontFamily: "serif",
          fontWeight: "bold",
          border: "1.5px solid #D4AF37",
        }}
      >
        ل
      </div>
    ),
    {
      ...size,
    }
  );
}
