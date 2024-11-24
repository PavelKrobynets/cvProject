"use client";
import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import styles from "./projectCard.module.scss";

interface Props {
  img: string;
  tags: string[];
  title: string;
  caption: string;
  link?: string;
}

export default function ProjectCard({ ...project }: Props) {
  const [modal, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalWindow = (
    <div className={styles.modalOverlay} onClick={handleCloseModal}>
      <div className={styles.modalClose} onClick={handleCloseModal}>
        x
      </div>
      {project.link ? (
        <Link href={project.link} className={styles.modalLink} target="_blank">
          <LinkIcon />
        </Link>
      ) : null}
      <img className={styles.modalImg} src={project.img} alt={project.title} />
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h5 className={styles.modalTitle}>{project.title}</h5>
        <div className={styles.modalTags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.modalTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.modalCaption}>{project.caption}</p>
      </div>
    </div>
  );

  return (
    <div>
      <figure className={styles.card} onClick={handleImageClick}>
        <img src={project.img} alt={project.title} />
        <figcaption className={styles.description}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </figcaption>
      </figure>

      {modal && modalWindow}
    </div>
  );
}
