import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        <section className="intro-section">
          <span>So, you want to travel to</span>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className="explore-section">
          <Link to="/destination" className="explore-link">
            EXPLORE
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
