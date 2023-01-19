import classes from "./Chicago.module.css";

export default function Chicago() {
  return (
    <section className={classes.chicagoSection}>
      <div className={`fluidContainer ${classes.chicagoContainer}`}>
        <h2 className="sectionTitle">Our story</h2>
      </div>
    </section>
  );
}
