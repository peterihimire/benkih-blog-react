import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-center">
        <div className="newsletter-container">
          <div className="aside-title">
            <h3>newsletter</h3>
          </div>
          <form>
            <input
              name="newsletter"
              type="email"
              id="newsletter"
              placeholder="Email address..."
            />
            <button className="btn newsletter-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
