import React from "react";
import "./landingpage2.css";

const LandingPage2 = () => {
  return (
    <div
      style={{
        height: 850,
        width: "100%",
      }}
    >
      <div
        style={{
          height: 350,
          width: "100%",
          //   display: "flex",
          //   justifyContent: "center",
        }}
        className="customers-icon"
      >
        <div
          style={{
            height: 70,
            width: "40%",
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          <p style={{ fontSize: 20, fontWeight: 500 }}>
            Join the teams that acheive the impossible everyday
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              color: "blue",
            }}
          >
            <img
              src="https://img.icons8.com/ultraviolet/512/play-button-circled.png"
              style={{ height: 20, width: 20, objectFit: "cover" }}
            ></img>
            Watch customer story
          </p>
        </div>
        <div
          className="icons"
          style={{
            height: 150,
            width: "90%",
            display: "flex",
            margin: "auto",
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 0.15,
            }}
          >
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:77c2f652-ab9b-4619-b175-c3f408c3e350/kiva.svg?cdnVersion=651"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div style={{ flex: 0.15 }}>
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:0a7dd09c-7f87-4bc9-8b65-318b0a41efb8/twitter.svg?cdnVersion=651"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div style={{ flex: 0.15 }}>
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:46501297-a5e1-482a-9f8f-3718dd24376e/redfin.svg?cdnVersion=651"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div style={{ flex: 0.15 }}>
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:67ac3b31-6097-49f8-b1c2-efdc492ddae1/nasa.svg?cdnVersion=651"
              style={{ objectFit: "cover", height: 100, width: 100 }}
            ></img>
          </div>
          <div style={{ flex: 0.15 }}>
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:debe18ec-0a3d-4bfc-aa58-f11948d8d056/audi.svg?cdnVersion=651"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
          <div style={{ flex: 0.15 }}>
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:63951eab-b7d9-4d5f-ab23-ba511d27d4aa/castlight.svg?cdnVersion=651"
              style={{ objectFit: "cover" }}
            ></img>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          //   backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            height: 400,
            width: "80%",
            display: "flex",
            marginTop: 150,
            gap: 100,
          }}
        >
          <div style={{ flex: 0.35 }}>
            <p
              style={{
                textTransform: "uppercase",
                fontWeight: 700,
                color: "teal",
                letterSpacing: 1,
                textAlign: "start",
                paddingTop: 100,
              }}
            >
              Team Essentials
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 500,
                paddingTop: 20,
                textAlign: "start",
              }}
            >
              Explore resource to unleash the potential of your team.
            </p>
          </div>
          <div
            style={{
              flex: 0.65,
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 250,
                width: "100%",
                // backgroundColor: "green",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <img
                src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:186ede27-ffbb-420b-8dff-12dbd47735d4/Community_760x235@2x.jpg?cdnVersion=651"
                style={{
                  height: 250,
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              ></img>
            </div>
            <div
              style={{
                height: 250,
                width: "100%",
                backgroundColor: "#FEF9E7",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 20, fontWeight: 500, paddingTop: 20 }}>
                Attlasian Community
              </p>
              <p style={{ fontSize: 15, paddingTop: 20, fontWeight: 500 }}>
                Connect globally and meet locally to get more out of our
                products.
              </p>
              <div
                style={{
                  display: "flex",
                  height: 50,
                  width: "70%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <div style={{ flex: 0.4, color: "blue" }}>Search Forum</div>
                <div style={{ flex: 0.4, color: "blue" }}>Join Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
