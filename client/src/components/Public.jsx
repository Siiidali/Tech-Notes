import { Link } from "react-router-dom";
import React from "react";
import useTitle from "../hooks/useTitle";
const Public = () => {
  useTitle("Sidali S. Repairs");
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Sidali S. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Ruisseau, Sidali S. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Sidali S. Repairs
          <br />
          Ruisseau, Algeries
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Sidali Si-Saber</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
