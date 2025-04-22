import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { CREW_DATA } from "../space-data";

function Crew() {
  const [currentCrew, setCurrentCrew] = useState({
    data: CREW_DATA[0],
    currIndex: 0,
  });
  const roleRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const interval = useRef(null);

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

    const imgEl = imgRef.current;
    imgEl.classList.remove("animate-crew-img");
    void imgEl.offsetWidth;
    imgEl.classList.add("animate-crew-img");
  }, [currentCrew]);

  useEffect(() => {
    console.log(interval.current);
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
    interval.current = setInterval(() => {
      setCurrentCrew((prevData) => {
        const nextIndex =
          prevData.currIndex < CREW_DATA.length - 1
            ? prevData.currIndex + 1
            : 0;
        return { data: CREW_DATA[nextIndex], currIndex: nextIndex };
      });
    }, 8000);

    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, [currentCrew]);

  function handleClick(selectedIndex) {
    if (currIndex === selectedIndex) return;
    clearInterval(interval.current);
    setCurrentCrew({
      data: CREW_DATA[selectedIndex],
      currIndex: selectedIndex,
    });
  }

  const { data, currIndex } = currentCrew;
  return (
    <>
      <Header />
      <main className="crew-page">
        <div className="main-container">
          <h1>MEET YOUR CREW</h1>
          <article>
            <section>
              <header className="crew-header">
                <p ref={roleRef} className="crew-role animate-role">
                  {data.role}
                </p>
                <h2 ref={nameRef} className="crew-name">
                  {data.name}
                </h2>
              </header>
              <p ref={descRef} className="crew-description animate-crew-desc">
                {data.description}
              </p>
              <menu className="crew-menu">
                {CREW_DATA.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={index === currIndex ? "is-active" : ""}
                  ></button>
                ))}
              </menu>
            </section>
            <figure>
              <img
                ref={imgRef}
                className="animate-crew-img"
                src={data.image}
                alt={data.name}
              />
            </figure>
          </article>
        </div>
      </main>
    </>
  );
}

export default Crew;
