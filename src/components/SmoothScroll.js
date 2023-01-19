import { Fragment, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location, navigationType]);

  return <Fragment>{children}</Fragment>;
}
