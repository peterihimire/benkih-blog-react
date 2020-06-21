import React from "react";
import Categories from "../components/categories";
import { withPostConsumer } from "../context";
const CategoriesList = props => {
  console.log(props);
  const { categories } = props.context;
  console.log(categories);

  return (
    <section className="categories-container">
      <div className="categories-container-center">
        <div className="categories-list">
          {categories.map((item, index) => {
            return <Categories key={index} category={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default withPostConsumer(CategoriesList);
