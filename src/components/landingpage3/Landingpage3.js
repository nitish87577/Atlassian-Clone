import React from "react";
import Card from "../cards/Card";

const Landingpage3 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 40,
        paddingBottom: 30,
      }}
    >
      <Card
        image={
          "https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b1f2b0a5-3eb9-4485-8926-758f20c1c8d8/Blog_360x265@2x.jpg?cdnVersion=651"
        }
        title="Work Life"
        text={
          "Real-life advice, inspiration, and stories from the working world today."
        }
        link="Read our blog"
      />
      <Card
        image={
          "https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:a88c87c6-f3ca-4eed-942b-2f02a2f8ed41/Team%20Playbook_360x265@2x.png?cdnVersion=651"
        }
        title="Atlassian Team Playbook"
        text={"Solve common team challenges with these group exercises."}
        link="Check team health"
      />
      <Card
        image={
          "https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:97e312e4-3156-47e1-bccc-6bc7f13be27a/Agile%20Coach_360x265@2x.png?cdnVersion=651"
        }
        title={"The Agile Coach"}
        text={"Atlassian's no-nonsense guide to agile development."}
        link={"Visit our resources"}
      />
    </div>
  );
};

export default Landingpage3;
