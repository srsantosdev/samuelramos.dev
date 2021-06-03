import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;

  height: 10rem;

  display: flex;
  align-items: center;

  background: var(--black);

  > div {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;

    padding: 0 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    gap: 1.6rem;
  }

  svg {
    width: 3.2rem;
    height: 2.4rem;
  }

  img {
    width: 20rem;
  }

  a {
    transition: color 0.2s ease-out;
  }

  a:hover {
    color: var(--primary);
  }
`

export const Main = styled.main`
  > section {
    width: 100%;

    margin-top: 4rem;

    > div {
      width: 100%;
      max-width: 980px;
      margin: 0 auto;

      padding: 0 2.4rem;

      display: flex;
      align-items: flex-start;
      gap: 4rem;
    }
  }

  .image-container {
    background: linear-gradient(315deg, hsla(184, 90%, 29%, 1) 0%, hsla(218, 30%, 24%, 1) 100%);
    padding: 0.2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      border: 2px solid var(--background);
      border-radius: 50%;
      width: 30rem;
      height: 30rem;
    }
  }

  .container-info {
    h1 {
      font-size: 4rem;
      font-weight: 500;

      margin-bottom: 3.2rem;

      span {
        color: var(--primary);
        font-weight: 600;
      }
    }

    p {
      font-size: 1.4rem;
    }

    a {
      margin-top: 2.4rem;
    }
  }
`

export const DownloadButton = styled(motion.a)`
  text-decoration: none;
  width: max-content;

  background: var(--primary);
  color: #fff;

  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  transition: filter 0.2s ease-in-out;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const SkillsContainer = styled.div`
  width: 100%;

  margin-top: 10rem;

  h2 {
    font-size: 3.4rem;
    font-weight: 500;

    span {
      color: var(--primary);
    }
  }

  > div {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;

    padding: 0 2.4rem;
  }

  .skills-container {
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.4rem;
  }
`

export const Footer = styled.footer`
  margin-top: 4rem;

  background: var(--black);
  height: max-content;
  width: 100%;

  > div {
    max-width: 980px;
    margin: 0 auto;
    padding: 1.6rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

   

    > span {
      font-size: 1.2rem;
      color: #555;
    }
  }
`

export const ContainerInfo = styled.div`
  img {
    width: 20rem;
  }

  > div {
    margin-top: 3.2rem;

    span {
      font-size: 1.2rem;
      display: block;
      
      color: var(--primary);

      strong {
        color: var(--white);
      }
    }

    span + span {
      margin-top: 0.8rem;
    }
  }
`