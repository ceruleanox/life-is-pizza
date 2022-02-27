import { React, useState } from "react";
import Modal from 'react-modal';

import Map from '../Layout/Map'
import classes from "./About.module.css";
import logo from "../../assets/Chicago-pizza.png";
import img from "../../assets/pizza-pic.png";

function About() {
  return (
    <>
      <div className={classes.imageContainer}>
        <img className={classes["chicago-pizza"]} src={logo} alt="Logo art" />
      </div>
      <div className={classes["content"]}>
        <Map />
        <div className={classes["about-content"]}>
          <p>
            Chicago has a prolific pizza history.
            Originally brought to Chicago by Neapolitan immigrants,
            neapolitan-style pizza was quickly upended by a new style of pizza:
            saucy, cheesy, crunchy deep-dish pizza.{" "}
          </p>
          <p>
            Ike Sewell and Ric Riccardo opened the first Pizzeria Uno (now known as Uno Chicago
            Grill), serving deep-dish pizza. However, a Pizzeria Uno employee
            named Rudy Malnati claimed that he was the original creator of the
            recipe. He later opened his own Pizzeria along with his son: Lou
            Malnati’s Pizzeria. Rudy Malnati’s other son, Rudy Jr, opened his
            own pizza joint in the early 1990s - Pizano’s. These businesses
            continue to serve the Chicago area today.{" "}
          </p>
          <p>
            Pizza is perfect comfort food in times of uncertainty. While
            national chains like Domino's and Papa John's saw profits
            skyrocketing during the pandemic despite underperforming for many
            years prior, modest neighborhood establishments and family favorites
            with decades of history fought to survive. The public health crisis
            is a reminder that restaurants serve as community beacons, serving
            their neighborhood and not giving up. This is especially true of
            Chicago's pizza places, who inspired us to create a platform for
            supporting local pizza restaurants, cornerstones of their
            communities.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
