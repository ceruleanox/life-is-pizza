import { React } from "react";

import classes from "./About.module.css";
import logo from "../../assets/Chicago-pizza.png";
import img from "../../assets/pizza-pic.png";

function About() {
  return (
    <>
      <div className={classes["content"]}>
        <img
          className={classes["pizza-pic"]}
          src={img}
          alt="photo of deep dish pizza"
        />
        <div className={classes["about-content"]}>
          <img className={classes["chicago-pizza"]} src={logo} alt="Logo art" />
          <p>
            Chicago has quite a prolific history when it comes to pizza.
            Originally brought to Chicago by Neapolitan immigrants,
            neapolitan-style pizza was quickly upended by a new style of pizza:
            saucy, cheesy, crunchy deep-dish pizza.{" "}
          </p>
          <p>
            There’s a bit of uncertainty regarding who is to thank for inventing
            deep-dish, but there are several known contenders. Ike Sewell and
            Ric Riccardo opened the first Pizzeria Uno (now known as Uno Chicago
            Grill), serving deep-dish pizza. However, a Pizzeria Uno employee
            named Rudy Malnati claimed that he was the original creator of the
            recipe. He later opened his own Pizzeria along with his son: Lou
            Malnati’s Pizzeria. Rudy Malnati’s other son, Rudy Jr, opened his
            own pizza joint in the early 1990s - Pizano’s. These businesses
            continue to serve the Chicago area today.{" "}
          </p>
          <p>
            Deep-dish isn’t the only pizza deviation to spawn from Chicago,
            however. In the 1970’s, Nancy’s and Giodarno’s created the stuffed
            pizza - similar to deep-dish, with an additional layer of dough on
            top. In addition, Chicago has its own style of pan pizza and
            thin-crust pizza.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
