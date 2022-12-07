import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        // height: 370,
        width: "100%",
        backgroundColor: "#F4F5F7",
        // display: "flex",
      }}
    >
      <div
        style={{
          height: 250,
          width: "100%",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          paddingTop: 50,
        }}
      >
        <div
          style={{
            flex: 0.2,
            // backgroundColor: "orange",
            height: 250,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 15,
              width: "100%",
            }}
          >
            <img
              src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:bec8148d-b7dc-493f-bbba-7519b0637581/logos-atlassian-logo-gradient-horizontal-neutral.svg?cdnVersion=651"
              style={{ height: 15, objectFit: "cover" }}
            ></img>
          </div>
        </div>
        <div
          style={{
            flex: 0.2,
            height: 250,
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            gap: 5,
            fontSize: 14,
            // backgroundColor: "red",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Products
          </p>
          <p style={{ paddingTop: 20 }}>Jira Software</p>
          <p>Jira Align</p>
          <p>Jira Service Management</p>
          <p>Confluence</p>
          <p>Trello</p>
          <p>Bitbucket</p>
          <p style={{ paddingTop: 20, color: "blue" }}>View all products</p>
        </div>
        <div
          style={{
            flex: 0.2,
            // backgroundColor: "green",
            height: 250,
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            gap: 5,
            fontSize: 14,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            Resources
          </p>
          <p style={{ paddingTop: 20 }}>Technical Support</p>
          <p>Purchasing & licensing</p>
          <p>Atlassian Community</p>
          <p>Knowledge base</p>
          <p>Marketplace</p>
          <p>My Account</p>
          <p style={{ paddingTop: 20, color: "blue" }}>Create support ticket</p>
        </div>
        <div
          style={{
            flex: 0.2,
            // backgroundColor: "yellow",
            height: 250,
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            gap: 5,
            fontSize: 14,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            Expand & Learn
          </p>
          <p style={{ paddingTop: 20 }}>Partners</p>
          <p>Training & Certification</p>
          <p>Documentation</p>
          <p>Developer Resources</p>
          <p>Enterprise services</p>
          <p style={{ paddingTop: 20, color: "blue" }}>View all resources</p>
        </div>
        <div
          style={{
            flex: 0.2,
            // backgroundColor: "blue",
            height: 250,
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            gap: 5,
            fontSize: 14,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            About Attlasian
          </p>
          <p style={{ paddingTop: 20 }}>Company</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Blogs</p>
          <p>Investor Relations</p>
          <p>Trust & Security</p>
          <p style={{ paddingTop: 20, color: "blue" }}>Contact us</p>
        </div>
      </div>
      <hr></hr>
      <div
        style={{
          display: "flex",
          //   backgroundColor: "red",
          width: "100%",
          height: 55,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            flex: 0.7,
            display: "flex",
            // backgroundColor: "yellow",
            gap: 40,
            fontWeight: 500,
            fontSize: 14,
            color: "#42526E",
            paddingLeft: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ display: "flex", gap: 5 }}>
            <img
              src="https://img.icons8.com/ios/512/globe.png"
              height={15}
              width={15}
            ></img>
            English
          </p>
          <p>Privacy policy</p>
          <p>Terms</p>
          <p>Modern Slavery Act</p>
          <p>Impressum</p>
          <p>Copyright © 2022 Atlassian</p>
        </div>
        <div
          style={{
            // backgroundColor: "orange",
            flex: 0.3,
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 50,
            //justifyContent: "center",
          }}
        >
          <img
            src="https://img.icons8.com/fluency/512/facebook.png"
            height={50}
            width={50}
          ></img>
          <img
            src="https://img.icons8.com/fluency/512/twitter.png"
            height={50}
            width={50}
          ></img>
          <img
            src="https://img.icons8.com/fluency/512/linkedin.png"
            height={50}
            width={50}
          ></img>
          <img
            src="https://img.icons8.com/ios-filled/512/youtube-squared.png"
            height={50}
            width={50}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
