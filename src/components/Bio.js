import React from "react";
// import { Follow } from "react-instagram-widgets";
import styles from "./Bio.module.scss";

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Ditulis oleh <strong>{config.userName}</strong> developer Indonesia yang
      tertarik di web-development
      {/* {` `}
      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : "none" }}
      /> */}
    </p>
  </>
);

export default Bio;
