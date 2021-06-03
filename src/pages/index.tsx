import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'
import { motion } from 'framer-motion'

import Skill from '../components/Skill';

import {
  Container,
  Header,
  Main,
  DownloadButton,
  SkillsContainer,
  ContainerInfo,
  Footer
} from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Header>
        <div>
          <img src="/logo.svg" alt="Samuel Ramos" />

          <ul>
            <li>
              <a href="https://github.com/srsantosdev">
                <AiOutlineGithub />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/srsantosdev">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </Header>

      <Main>
        <section>
          <div>
            <motion.div className="image-container"
              initial={{ scale: 0.5, opacity: 0.1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/my-image.jpg"
                alt="Samuel Ramos"
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="container-info"
              initial={{ scale: 0.5, opacity: 0, }}
              transition={{ duration: 0.5 }}
              animate={{ scale: 1, opacity: 1, }}
            >
              <motion.h1>Olá, eu sou o <br /> <span>Samuel Ramos</span>!</motion.h1>

              <motion.p
                initial={{ x: -40, opacity: 0, }}
                animate={{ x: 0, opacity: 1, }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                Engenheiro de software, entusiasta das melhores tecnologias no mundo do desenvolvimento web/mobile.
                Atualmente estou focado na stack Node.js, React, React Native e tudo relacionado a este ecossistema.
                Estou em constante aprendizado buscando aprender novas habilidades.
                Amo enfrentar novos desafios e criar aplicações eficientes e esteticamente agradáveis.
              </motion.p>

              <DownloadButton 
                href="/curriculo-samuel-ramos.pdf" 
                download 
                initial={{ x: -40, opacity: 0, }}
                animate={{ x: 0, opacity: 1, }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                <AiOutlineDownload />
                Baixar currículo
              </DownloadButton>
            </motion.div>
          </div>
        </section>

        <SkillsContainer>
          <div>
            <h2>
              <span>Tecnologias</span> que uso no dia a dia
            </h2>

            <div className="skills-container">
              <Skill name="Typescript" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="Javascript" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="NodeJS" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
              ]} />
              <Skill name="Webpack" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
              ]} />
              <Skill name="React" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="React Native" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
                { completed: false },
              ]} />
              <Skill name="CSS" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="Jest" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
                { completed: false },
              ]} />
              <Skill name="HTML" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="Git" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: true },
              ]} />
              <Skill name="Serverless" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
                { completed: false },
              ]} />
              <Skill name="Docker" level={[
                { completed: true },
                { completed: true },
                { completed: true },
                { completed: false },
                { completed: false },
              ]} />
            </div>
          </div>
        </SkillsContainer>
      </Main>

      <Footer>
        <div>
          <ContainerInfo>
            <img src="/logo.svg" alt="Samuel Ramos" />

            <div>
              <span>
                <strong>E-mail: </strong>
                srsantosdev@gmail.com
              </span>
              <span>
                <strong>Whatsapp: </strong>
                +55 75 9 9120 6853
              </span>
            </div>
          </ContainerInfo>

          <span>Copyright 2021 (c) Todos os direitos reservados.</span>
        </div>
      </Footer>
    </Container>
  )
}
