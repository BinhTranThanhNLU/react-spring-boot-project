import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
import { ListProductHome } from "./components/ListProductHome";

export const HomePage = () => {
  return (
    <main className="main">
      <Hero/>
      <Categories/>
      <ListProductHome/>
    </main>
  );
};
