import React from 'react'
import { useParams } from 'react-router';

export const About = () => {
    const { name } = useParams();
  return (
    <>
    <h1>About</h1>
    </>
  )
}

export default About

