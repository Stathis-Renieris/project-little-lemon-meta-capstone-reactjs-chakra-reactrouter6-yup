import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import ToTopButton from "../ui/ToTopButton";
import Alert from "../ui/Alert";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main
        className={classes.main}
        id="main-content"
      >
        {children}
      </main>
      <Footer />
      <ToTopButton />
      <Alert />
    </Fragment>
  );
}
