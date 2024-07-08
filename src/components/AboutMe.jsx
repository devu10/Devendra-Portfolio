import React from "react";
import imgdev2 from "../assets/devendra_black_bg.png";
import { Title } from "./Title";
export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <Title title="About Me" />
      <div className="container flex about-content">
        <div className="flex-center my-imgae">
          <img src={imgdev2} alt="devendra-image-2" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Devendra Raj Dahal</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            officiis iusto asperiores illum, aliquid corporis necessitatibus
            tempora minus debitis quas nulla numquam magni, voluptas tempore
            sunt adipisci cumque est impedit? Dolores nulla praesentium rem,
            aspernatur assumenda blanditiis tenetur maxime rerum quasi
            laboriosam minima, nesciunt fuga pariatur quisquam hic ipsum
            numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum
            illo porro aut commodi et voluptate at delectus deserunt ipsa.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Gym</span>
              <span>Programming</span>
              <span>Travel</span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
