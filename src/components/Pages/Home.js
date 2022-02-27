import { React } from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

import logo from "../../assets/Chicago-pizza.png";
import img from "../../assets/chicago-skyline-crop.png";

function Home() {
  return (
    <>
      <div className={classes["content"]}>
        <img
          className={classes["chicago-skyline"]}
          src={img}
          alt="img of chicago skyline"
        />
        <div className={classes["home-content"]}>
          <img className={classes["chicago-pizza"]} src={logo} alt="Logo art" />
          <p>
            <span className={classes["life-span"]}>
              <i>Life is Pizza</i> aims to alleviate some of the financial
              stressors Chicago pizza restaurants are facing by providing them a
              platform to share their story & sell program-exclusive pizzas.
            </span>
            <span>
              It’s no secret that the pandemic has taken a toll on the
              restaurant industry. As of late 2021, nearly 19% of Chicago
              restaurants had closed since the start of the pandemic. If you are
              interested in supporting local businesses and eating delicious
              pizza while you’re at it, look no further!
            </span>
          </p>
          <Link to="/Shop">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
