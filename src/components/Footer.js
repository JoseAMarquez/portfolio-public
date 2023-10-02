import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//add your logo
import logo from '../assets/img/logow.png';

import { socials } from '../data';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Col sm={6}>
            <img src={logo} alt='' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              {socials.map((socialInfo) => {
                const { id, url, icon } = socialInfo;
                return (
                  <a key={id} href={url} target='_blank' rel='noreferrer'>
                    {icon}
                  </a>
                );
              })}
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
