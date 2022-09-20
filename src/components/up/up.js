import React, { useEffect } from "react";
import "./up.css";
import { useScrollTo } from "react-use-window-scroll";
import u from "../../img/up-arrow.png";
const Up = () => {
  const scrollTo = useScrollTo();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 600) {
        // setSc(true);
        const btn = document.getElementById("up");
        btn.style.display = "block";
      } else {
        // setSc(false);
        const btn = document.getElementById("up");
        btn.style.display = "none";
      }
    });
  }, []);
  return (
    <button
      id="up"
      className="up"
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <img src={u} width="20px" height="20px" alt="u" />
    </button>
  );
};

export default Up;
