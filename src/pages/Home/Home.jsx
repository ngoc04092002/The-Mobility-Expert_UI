import React from "react";
import { CategorieItems, SlideShow } from "../../components";

const categories = [
  "Mobility Scooters",
  "Manual Wheelchairs",
  "Power Wheelchairs",
  "Patient Lifts",
  "Walkers",
  "Bathroom",
  "Accessories",
  "Furniture",
];

function Home() {
  return (
    <section>
      <SlideShow
        labelContent={"Buying Guides"}
        buttonContent={"See All Buying Guides"}
        className=""
      />
      <CategorieItems
        title={"Shop Categories"}
        categories={categories}
        className=""
      />
    </section>
  );
}

export default Home;
