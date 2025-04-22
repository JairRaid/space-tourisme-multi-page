import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { TECH_DATA } from "../space-data";

function Technology() {
  const [currentTech, setCurrentTech] = useState({
    data: TECH_DATA[0],
    currIndex: 0,
  });

  const roleRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    const roleEl = roleRef.current;
    roleEl.classList.remove("animate-role");
    void roleEl.offsetWidth;
    roleEl.classList.add("animate-role");

    const nameEl = nameRef.current;
    nameEl.classList.remove("animate-name");
    void nameEl.offsetWidth;
    nameEl.classList.add("animate-name");

    const descEl = descRef.current;
    descEl.classList.remove("animate-crew-desc");
    void descEl.offsetWidth;
    descEl.classList.add("animate-crew-desc");
  }, [currentTech]);

  function handleClick(selectedIndex) {
    setCurrentTech({
      data: TECH_DATA[selectedIndex],
      currIndex: selectedIndex,
    });
  }

  const { data, currIndex } = currentTech;
  return (
    <>
      <Header />
      <main className="tech-page">
        <div className="main-container">
          <h1>SPACE LAUNCH 101</h1>
          <article>
            <figure>
              <img
                src={data.image}
                alt={data.title}
                style={{ objectPosition: "center" }}
              />
            </figure>
            <section>
              <menu>
                {TECH_DATA.map((_, index) => (
                  <button
                    key={index}
                    className={currIndex === index ? "is-active" : ""}
                    onClick={() => handleClick(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </menu>
              <div className="text-container">
                <header className="tech-header">
                  <p ref={roleRef} className="tech-terminology animate-role">
                    {data.defaultText}
                  </p>
                  <h2 ref={nameRef} className="tech-title animate-name">
                    {data.title}
                  </h2>
                </header>
                <p ref={descRef} className="tech-description animate-crew-desc">
                  {data.description}
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Technology;
