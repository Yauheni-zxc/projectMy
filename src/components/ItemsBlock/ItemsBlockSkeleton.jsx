import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./Skeleton.module.css";

const Skeleton = (props) => (
  <ContentLoader 
  className={styles.slider}
    speed={2}
    width={390}
    height={460}
    viewBox="0 0 561 860"
    backgroundColor="#d8d5d5"
    foregroundColor="#bfbdbd"
    {...props}
  >
   
    <rect x="20" y="22" rx="0" ry="0" width="340" height="60" /> 
    <rect x="6" y="91" rx="0" ry="0" width="370" height="490" /> 
    <rect x="80" y="600" rx="0" ry="0" width="235" height="59" />
  </ContentLoader>
)

export default Skeleton