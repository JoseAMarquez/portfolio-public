import React from 'react';
import { Col } from 'react-bootstrap';

import { FaGithubSquare } from 'react-icons/fa'; //github

import { BsEyeFill } from 'react-icons/bs';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  demoLink,
  codeLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt=''></img>
        <div className='proj-txt'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-links'>
            <a href={demoLink} target='_blank' rel='noopener noreferrer'>
              <p className='proj-links-icon'>
                <BsEyeFill size={30} />
                Demo
              </p>
            </a>
            <a href={codeLink} target='_blank' rel='noopener noreferrer'>
              <p className='proj-links-icon'>
                <FaGithubSquare size={30} />
                Code
              </p>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
