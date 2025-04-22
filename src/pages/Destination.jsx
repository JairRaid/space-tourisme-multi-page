import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { DESTINATION_DATA } from "../space-data";

function Destination() {
  const [currentDestination, setCurrentDestination] = useState({
    data: DESTINATION_DATA[0],
    currIndex: 0,
  });
  const imgREf = useRef();
  const titleRef = useRef();
  const descREf = useRef();
  const defListRef = useRef();

  useEffect(() => {
    const imgEl = imgREf.current;
    imgEl.classList.remove("animate-img");
    void imgEl.offsetWidth;
    imgEl.classList.add("animate-img");

    const titleEl = titleRef.current;
    titleEl.classList.remove("animate-title");
    void titleEl.offsetWidth;
    titleEl.classList.add("animate-title");

    const descEl = descREf.current;
    descEl.classList.remove("animate-desc");
    void descEl.offsetWidth;
    descEl.classList.add("animate-desc");

    const defListEl = defListRef.current;
    defListEl.classList.remove("animate-def-list");
    void defListEl.offsetWidth;
    defListEl.classList.add("animate-def-list");
  }, [currentDestination]);

  function handleClick(selectedIndex) {
    setCurrentDestination({
      data: DESTINATION_DATA[selectedIndex],
      currIndex: selectedIndex,
    });
  }

  const { data, currIndex } = currentDestination;

  return (
    <>
      <Header />
      <main className="destination-page">
        <div className="main-container">
          <h1>PICK YOUR DESTINATION</h1>
          <article>
            <figure ref={imgREf} className="animate-img">
              <img src={data.image} alt={data.title} />
            </figure>
            <section>
              <menu>
                {DESTINATION_DATA.map((destination, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={index === currIndex ? "is-active" : ""}
                  >
                    {destination.title}
                  </button>
                ))}
              </menu>
              <h2 ref={titleRef} className="animate-title">
                {data.title}
              </h2>
              <p ref={descREf} className="animate-desc">
                {data.description}
              </p>
              <hr />
              <dl ref={defListRef} className="def-list animate-def-list">
                <div className="def-item">
                  <dt>AVG. DISTANCE</dt>
                  <dd>{data.avgDistance}</dd>
                </div>
                <div className="def-item">
                  <dt>EST. TRAVEL TIME</dt>
                  <dd>{data.estTimeTravel}</dd>
                </div>
              </dl>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Destination;
