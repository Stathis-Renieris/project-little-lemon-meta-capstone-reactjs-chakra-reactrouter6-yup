import Button from "../ui/Button";
import SpecialCard from "./SpecialCard";
import classes from "./Specials.module.css";

import SpecialImage1 from "../../images/specials1-cumin-roasted-cauliflower-soup.jpg";
import SpecialImage2 from "../../images/specials2-pork-neck-vindaloo-curry.jpg";
import SpecialImage3 from "../../images/specials3-spiced-pumpkin-and-chickpea-pot.jpg";

// A database fetched list of special dishes collection:
const specialDishes = [
  {
    image: SpecialImage1,
    title: "Cumin roasted cauliflower soup",
    price: 10.99,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
  {
    image: SpecialImage2,
    title: "Pork curry",
    price: 15.4,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
  {
    image: SpecialImage3,
    title: "Spiced pumpkin and chickpea pot",
    price: 12.3,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
];

export default function Specials() {
  return (
    <section className={classes.specialsSection}>
      <div className={`fluidContainer ${classes.specialsContainer}`}>
        <div className={classes.specialsInto}>
          <h2 className="sectionTitle">This weeks specials!</h2>
          <Button link="/">Online menu</Button>
        </div>
        <div className={classes.specialsCollection}>
          {specialDishes.map((dish) => (
            <SpecialCard
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
