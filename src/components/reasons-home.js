import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./reasons-home.module.scss";
import HelloWorldGIF from "../imgs/TCHA.gif";
import { WHYTC, CROSS, EASY, PLATFORMS, CONFIG, GITHUB } from "../utils/links";
import TCButton from "./button";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;

function Reasons() {
  const data = useStaticQuery(graphql`
    query {
      low: file(relativePath: { eq: "src/imgs/lowfootprint.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      test: file(relativePath: { eq: "src/imgs/gui.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devices: file(relativePath: { eq: "src/imgs/cross.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      config: file(relativePath: { eq: "src/imgs/requirements.png" }) {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rasp: file(relativePath: { eq: "src/imgs/raspberry.png" }) {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      open: file(relativePath: { eq: "src/imgs/opensource.png" }) {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className={styles.containerIcons}>
        <Link to={WHYTC}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.low.childImageSharp.fixed}
                alt="low footprint icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Low Footprint</div>
              <div className={styles.iconText}>
                Less than 5MB of footprint, ensuring high performance even when
                running in low-end devices
              </div>
            </div>
          </div>
        </Link>
        <Link to={EASY}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.test.childImageSharp.fixed}
                alt="test footprint icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Easy to use GUI Creator</div>
              <div className={styles.iconText}>
                Basic knowledge of Java or Kotlin lets you build performing Apps
                for Android, Linux Arm, Windows and iOS.
              </div>
            </div>
          </div>
        </Link>
        <Link to={CROSS}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.devices.childImageSharp.fixed}
                alt="desktop tablet and mobile icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Cross-Platform</div>
              <div className={styles.iconText}>
                Code once and run on every platform. Responsive User Interfaces
                providing same behaviour and usability.
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.containerIcons}>
        <Link to={PLATFORMS}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img fixed={data.config.childImageSharp.fixed} alt="cogs icon" />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Minimum Requirements</div>
              <div className={styles.iconText}>
                256MB RAM, CPU Arm A7 528MHz and no GPU
              </div>
            </div>
          </div>
        </Link>
        <Link to={GITHUB}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.open.childImageSharp.fixed}
                alt="open-source icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>
                Free and Open-Source
              </div>
              <div className={styles.iconText}>
                Hosted on GitHub and maintained by a community of contributors.
              </div>
            </div>
          </div>
        </Link>
        <Link to={CONFIG}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.rasp.childImageSharp.fixed}
                alt="raspberry pi icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>
                Supported Embedded Platforms
              </div>
              <div className={styles.iconText}>
                Raspberry Pi 4, 3, and 2, Beaglebone Black, Toradex Colibri,
                Verdin and Apalis.
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.containerCodeImage}>
        <img
          className={styles.image}
          src={HelloWorldGIF}
          alt="TotalCross code sample"
        />

        <div className={styles.codeText}>
          <p>
            TotalCross is an <strong>open source</strong> crossplatform SDK
            developed to make your life easier when creating mobile grade user
            experience to your embedded systems.
          </p>
          <p>All while delivering native performance with a low footprint.</p>
          <TCButton
            color="black"
            text="Check our Samples"
            path="https://github.com/TotalCross/embedded-samples"
          />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
