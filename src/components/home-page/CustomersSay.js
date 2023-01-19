import User1Image from "../../images/user1.jpg";
import User2Image from "../../images/user2.jpg";
import User3Image from "../../images/user3.jpg";
import User4Image from "../../images/user4.jpg";
import classes from "./CustomersSay.module.css";
import Testimonial from "./Testimonial";

const fetchedTestimonials = [
  {
    id: "t1",
    image: User1Image,
    name: "Susan M.",
    stars: 4.5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "t2",
    image: User2Image,
    name: "Clementine C.",
    stars: 5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "t3",
    image: User3Image,
    name: "Samuel E",
    stars: 3.5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "t4",
    image: User4Image,
    name: "Kevin C.",
    stars: 4.5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function CustomersSay() {
  return (
    <section className={classes.customersSaySection}>
      <div className={`fluidContainer ${classes.customersSayContainer}`}>
        <h2 className="sectionTitle">What people say about us!</h2>
        <div className={classes.testimonials}>
          {fetchedTestimonials.map((item) => (
            <Testimonial
              key={item.id}
              image={item.image}
              name={item.name}
              stars={item.stars}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
