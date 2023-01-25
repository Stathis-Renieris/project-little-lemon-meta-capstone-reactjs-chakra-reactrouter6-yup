import { Fragment, useEffect } from "react";

import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";

export default function HomePage() {
  useEffect(() => {
    document.title = "Little Lemon";
  }, []);

  return (
    <Fragment>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </Fragment>
  );
}
