import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div
      style={{
        height: 750,
        width: "100%",
        // backgroundColor: "pink",
      }}
      className="parent-container"
    >
      <div style={{ display: "flex", height: 500 }} className="landing-view1">
        <div
          style={{
            // backgroundColor: "red",
            height: 400,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 700,
            fontSize: 60,
            paddingTop: 50,
          }}
        >
          <p style={{ fontSize: 60, marginRight: 100 }}>It's possible</p>
          <p style={{ marginLeft: 100 }}>with teamwork</p>
        </div>
        <div
          style={{
            // backgroundColor: "pink",
            flex: 0.6,
            height: 500,
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:e8e9c0ee-363c-47aa-828b-c7fa8c22098b/hero_right_full-image_800x450px@1-5x.jpg?cdnVersion=645"
            style={{ height: 500, objectFit: "cover" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          //   backgroundColor: "green",
          height: 200,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: 70,
        }}
      >
        <p style={{ fontSize: 30, fontWeight: 700 }}>
          Atlassian solutions are designed for all types of work
        </p>
        <div
          style={{
            height: 100,
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
          className="btn-container"
        >
          <button className="services-btn">Work Management</button>
          <button className="services-btn">IT Service Management</button>
          <button className="services-btn">Agile and DevOps</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
