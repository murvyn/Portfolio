import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import game from "../../Assets/Projects/game.png";
import godly from "../../Assets/Projects/godly.png";
import markdown from "../../Assets/Projects/markdown.png";
import taskify from "../../Assets/Projects/taskify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={markdown}
              isBlog={false}
              title="Markdown Editor"
              description="A browser-based Markdown editor, simplifying your writing experience. With intuitive features and real-time previews, crafting Markdown documents has never been easier. Say hello to effortless editing with us!"
              ghLink="https://github.com/murvyn/markdown-editor"
              demoLink="https://markdown-editor-ebon-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="Introducing our task management web app! Simplify your productivity with easy task creation, intuitive categorization, and seamless collaboration. Take control of your to-dos effortlessly. Start organizing your tasks now!"
              ghLink="https://github.com/murvyn/taskify"
              demoLink="https://task-manager-one-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Game Hub"
              description="Step into our game hub and unlock a world of fun! Discover a variety of games for every player, from classics to new releases. Join the gaming community and start playing today!"
              ghLink="https://github.com/murvyn/game-hub"
              demoLink="https://game-hub-lilac-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={godly}
              isBlog={false}
              title="Godly Feminine Woman"
              description="The Godly Feminine Woman blog is a platform dedicated to empowering women through faith-based content and inspirational articles. Designed with a user-friendly interface, the website offers an engaging experience where readers can easily explore topics related to spirituality, personal growth, and community support. Built with a modern web stack, the blog features responsive design, ensuring smooth access across devices. The platform highlights a clean, elegant layout that reflects the brand's values, making it not only visually appealing but also easy to navigate for visitors.."
              ghLink="https://github.com/murvyn/gf-blog"
              demoLink="https://www.gracefullyfeminineacademy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Forum "
              description="The Chat Forum is a cross-platform communication app designed specifically for students and lecturers. It enables real-time messaging, file sharing, and voice/video calling, creating a seamless communication hub within the university community.Powered by modern technologies, the app supports real-time communication with the help of Socket.io, ensuring instant message delivery across web and mobile devices. It also integrates Agora SDK for high-quality voice and video calls, making it easy to connect in both group and one-on-one settings. With its user-friendly interface and efficient communication tools, the Chat Forum enhances collaboration and interaction, providing a reliable space for academic discussions and social connections."
              ghLink="https://github.com/murvyn/chat-forum.git"
              demoLink="https://chat-forum-cyan.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
