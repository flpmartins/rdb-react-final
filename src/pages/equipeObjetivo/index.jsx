import background from './../../assets/rei-borracha.jpeg'
import background2 from './../../assets/barracao.jpeg'
import {
  Typography,
  Grid,
  Box,
  Avatar,
} from '@mui/material'
import 'animate.css/animate.min.css'
import '../dashboard/styles.css'
import './styles.css'

import { GoogleMaps } from '../../shared/components/googleMaps'

import React, { useState, useEffect } from 'react'

export const EquipeObjetivo = () => {

  const [currentBackground, setCurrentBackground] = useState(background)
  const [animationClass, setAnimationClass] = useState('fadeIn')

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fadeOut')

      setTimeout(() => {
        setCurrentBackground(prevBackground => 
          prevBackground === background ? background2 : background
        )
        setAnimationClass('fadeIn')
      }, 500)
    }, 5000)

    return () => clearInterval(interval);
  }, [])

  return (
    <Grid container className="dashboard-container">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        height="100vh"
        width="10px"
        className={`dashboard-background fadeInAnimation ${animationClass}`}
        sx={{
          backgroundImage: `url(${currentBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '70%',
        }}
      >
      </Box>
      <Grid 
      item 
      xs={12}
      sm={12}
      position="absolute" 
      top="25%" 
      left="55%"
       transform="translate(-50%, -50%)"
       >
        <Box p={4}
          className="fadeInAnimation content-box"
        >
          <Typography variant="h4" className="title">
            NOSSA EQUIPE
          </Typography>
          <Typography variant="body1" className="description">
            Nossa equipe é composta por profissionais altamente qualificados e dedicados, que trabalham juntos para garantir a melhor experiência para nossos clientes. Cada membro traz um conjunto único de habilidades e conhecimentos, contribuindo para o sucesso da nossa empresa.
            Nosso time é a espinha dorsal do Rei da Borracha, e nos orgulhamos de ter uma equipe tão talentosa e comprometida. Desde os engenheiros que desenvolvem nossos produtos até o pessoal de atendimento ao cliente que garante uma experiência impecável, cada pessoa aqui desempenha um papel crucial.
            Estamos constantemente investindo no desenvolvimento profissional de nossos colaboradores, oferecendo treinamentos e oportunidades de crescimento. Acreditamos que, ao apoiar e valorizar nossa equipe, estamos criando um ambiente de trabalho positivo e produtivo, que se reflete na qualidade dos nossos produtos e serviços.
            Juntos, somos mais fortes e capazes de superar qualquer desafio. No Rei da Borracha, nossa equipe é nossa maior força.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} marginTop={13}>
        <Box p={2} alignItems="center" className="fadeInAnimation">
          <Typography variant="h3" className="specialists-title">
            Conheça Nossos Profissionais
          </Typography>
        </Box>
        <br />
      </Grid>

      <Grid className="fadeInAnimation" container spacing={4} alignItems="stretch" justifyContent="center" marginLeft={6} marginRight={6} marginBottom={20}>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Avatar alt="João Silva" src="/path/to/joao-image.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
            <Typography variant="h6" sx={{ color: ' #B22222', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
              João Silva
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              Engenheiro de Produção com 10 anos de experiência em desenvolvimento de produtos de borracha.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Avatar alt="Maria Fernandes" src="/path/to/maria-image.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
            <Typography variant="h6" sx={{ color: ' #B22222', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
              Maria Fernandes
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              Especialista em Atendimento ao Cliente, sempre pronta para ajudar e solucionar problemas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Avatar alt="Carlos Souza" src="/path/to/carlos-image.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
            <Typography variant="h6" sx={{ color: ' #B22222', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
              Carlos Souza
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              Técnico em Manutenção com vasto conhecimento em equipamentos e sistemas de borracha.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} marginTop={3}>
        <Box p={2} alignItems="center" className="fadeInAnimation">
          <Typography variant="h3"  className="specialists-title">
            Depoimentos da Equipe
          </Typography>
        </Box>
        <br />
      </Grid>

      <Grid className="fadeInAnimation" container spacing={4} alignItems="stretch" justifyContent="center" marginLeft={6} marginRight={6} marginBottom={20}>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              "Trabalhar no Rei da Borracha é uma experiência incrível. Tenho orgulho de fazer parte desta equipe dedicada e inovadora." - João Silva
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              "O ambiente de trabalho aqui é muito acolhedor e incentivador. Cada dia traz novos desafios e oportunidades de crescimento." - Maria Fernandes
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2} className="card-box">
            <Typography variant="body1" mt={2} sx={{ color: 'black', fontFamily: 'Fira Sans Extra Condensed', textAlign: 'center' }}>
              "Estou aqui há anos e posso dizer que o compromisso com a qualidade e o respeito ao cliente é realmente levado a sério." - Carlos Souza
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <GoogleMaps />
    </Grid>
  );
};
