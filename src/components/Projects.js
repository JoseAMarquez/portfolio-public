import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//see data to find out projects structure
import { projects } from '../data';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';

import 'animate.css';

export const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>This are some of the projects I been working on it.</p>
                </div>
              )}
            </TrackVisibility>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='' />
    </section>
  );
};
