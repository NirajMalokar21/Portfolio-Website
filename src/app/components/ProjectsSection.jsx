"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 4,
    title: "Spring Patient Management System",
    description: "Built a microservices-based healthcare application using Spring Boot, Spring Cloud, and Spring Security, with gRPC, Kafka, and JWT authentication. Containerized services with Docker & Docker Compose, and provisioned AWS infrastructure (ECS, RDS, MSK, VPC, ALB) via CDK & LocalStack, ensuring scalability, security, and reproducibility.",
    image: "/images/projects/pmsystem-git-tn.png",
    tag: ["All", "Spring"],
    gitUrl: "https://github.com/NirajMalokar21/Patient_Management_System",
    previewUrl: "",
  },
  {
    id: 1,
    title: "Dev Overflow Fullstack Website",
    description: "Responsive full stack stack overflow clone implementing auth, reputation, recommendation algorithm, global and local search. Technologies used: NextJS, Tailwind, MongoDB, Typescript",
    image: "/images/projects/devflow-tn.png",
    tag: ["All", "Web" ],
    gitUrl: "https://github.com/NirajMalokar21/stack_overflow_nextjs14",
    previewUrl: "https://stack-overflow-nextjs14-eta.vercel.app/",
  },
  {
    id: 2,
    title: "IPhone 15 Landing page",
    description: "Responsive front-end application using React and tailwind for design and GSAP for animations.",
    image: "/images/projects/iphone-tn.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NirajMalokar21/Apple-Iphone-Website",
    previewUrl: "https://apple-iphone-website-mu.vercel.app/",
  },
  {
    
    id: 5,
    title: "ML Algorithms Repository",
    description: "A collection of Jupyter notebooks implementing classical ML models (Linear/Logistic Regression, SVM, etc.) with full workflows. Including EDA, preprocessing, training, and evaluation. Using Python (scikit-learn, pandas, matplotlib).",
    image: "/images/projects/mlAlg-git-tn.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/NirajMalokar21/SciKitLearn",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Modern Landing Page",
    description: "Responsive modern landing page created using NextJS, Tailwind and GSAP.",
    image: "/images/projects/travel-tn.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NirajMalokar21/travela-app",
    previewUrl: "https://travela-app-tau.vercel.app/",
  },
  {
    id: 6,
    title: "Superstore data analysis",
    description: "Data analysis and visualization of a superstore dataset using pandas, numpy, matplotlib, and seaborn deployed using streamlit",
    image: "/images/projects/data-analysis-tn.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/NirajMalokar21/superstore-data-analysis",
    previewUrl: "https://superstore-data-analysis-htg5kyv8tzcn39bh75yw5h.streamlit.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-4 md:mb-12">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Spring"
          isSelected={tag === "Spring"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analysis"
          isSelected={tag == "Data Analysis"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
