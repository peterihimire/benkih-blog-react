import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-center">
        <Title title="contact me" />
        <div className="contact-div">
          <div>
            <p>
              If you are looking for a way to get hold of me you can send me an
              email at <a href="https://gmail.com">peterihimire@gmail.com</a>{" "}
            </p>
            <p>
              You can also reach me on twitter and github at{" "}
              <a href="https://twitter.com">peterihimire</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
