import Title from "../title/Title";
import ProjectCard from "../projectCard/ProjectCard";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <Title anchor="Portfolio" title="Take a look at my latest projects" />
      <div className={styles.portfolio__container}>
        <ProjectCard
          img={"/penguin.webp"}
          tags={["TypeScript", "React"]}
          title={"Some project"}
          caption={"text"}
        />
        <ProjectCard
          img={"/penguin.webp"}
          tags={["tag1", "tag2"]}
          title={"title"}
          caption={"caption"}
        />
        <ProjectCard
          img={"/penguin.webp"}
          tags={["tag1", "tag2"]}
          title={"title"}
          caption={"caption"}
        />
        <ProjectCard
          img={"/penguin.webp"}
          tags={["tag1", "tag2"]}
          title={"title"}
          caption={"caption"}
        />
      </div>
    </section>
  );
}
