import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        // backgroundColor: "red",
        height: 70,
        display: "flex",
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: "space-between",
      }}
      className="nav-parent-div"
    >
      <div style={{ flex: 0.4, display: "flex" }}>
        <div
          style={{
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 0.3,
          }}
          className="nav-child-1"
        >
          <img
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=645"
            style={{ height: 18, width: 146, objectFit: "cover" }}
          ></img>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flex: 0.4,
            alignItems: "center",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          <p>Products</p>
          <p>For teams</p>
          <p>Support</p>
        </div>
      </div>

      <div
        className="nav-child-2"
        style={{
          display: "flex",
          flex: 0.4,
          // backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <div
          className="nav-child2-button"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: 0.3,
            // backgroundColor: "green",
          }}
        >
          <div className="btn1">
            <button
              style={{
                backgroundColor: "#0052CC",
                borderRadius: 2,
                textAlign: "center",
                color: "white",
                height: 30,
                width: 80,
                fontSize: 12,
                fontWeight: 900,
                border: 0,
              }}
            >
              Try Now
            </button>
          </div>
          <div className="btn2">
            <button
              style={{
                backgroundColor: "transparent",
                borderRadius: 5,
                textAlign: "center",
                color: "blue",
                height: 30,
                width: 100,
                fontSize: 12,
                fontWeight: 500,
                border: 0,
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div style={{ flex: 0.1, height: 20 }}>
          <img
            src="https://wac-cdn.atlassian.com/assets/img/icons/search.svg"
            style={{ height: 20, objectFit: "cover", justifyContent: "center" }}
          ></img>
        </div>

        <div
          className="divider-nav-child-2"
          style={{
            backgroundColor: "red",
            height: "30%",
            width: 1,
            backgroundColor: "gray",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <div
          style={{
            // backgroundColor: "pink",
            height: 20,
            flex: 0.3,
            display: "flex",
            gap: 5,
          }}
        >
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-user-web-flaticons-flat-flat-icons-2.png"
            style={{
              height: 20,
              objectFit: "cover",
              // backgroundColor: "yellow",
            }}
          ></img>
          <button
            style={{
              height: 20,
              display: "flex",
              color: "blue",
              backgroundColor: "transparent",
              border: 0,
              width: 100,
              // textAlign: "center",
              alignItems: "center",
              fontWeight: 900,
            }}
          >
            My account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
