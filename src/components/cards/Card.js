import React from "react";

const Card = (props) => {
  // destructuring props
  const { image, title, text, link } = props;
  return (
    <div
      style={{
        width: 350,
        height: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 0.4,
        }}
      >
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={image}
          width={200}
        />
      </div>
      <div
        style={{
          flex: 0.6,
          height: 400,
          backgroundColor: "#EAE6FF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ marginTop: 10, fontSize: 24, fontWeight: 600 }}>{title}</p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            // paddingLeft: 50,
            // paddingRight: 50,
            width: "75%",
            // margin: "auto",
          }}
        >
          {text}
        </p>
        <p
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "blue",
            paddingBottom: 30,
          }}
        >
          {link}
        </p>
      </div>
    </div>
  );
};

export default Card;
