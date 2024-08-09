import { Typography, Grid, Box } from '@mui/material'

import { GoogleMaps } from '../../shared/components/googleMaps'
import background from './../../assets/correia.png'

import 'animate.css/animate.min.css'
import './styles.css'

export const Dashboard = () => {
  return (
    <Grid container className="dashboard-container">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        height="100vh"
        className="dashboard-background fadeInAnimation"
      ></Box>
      <Grid
        item
        xs={12}
        sm={12}
        position="absolute"
        top="25%"
        left="48%"
        transform="translate(-50%, -50%)"
      >
        <Box
          p={4}
          className="content-box fadeInAnimation"
        >
          <Typography
            variant="h4"
            className="title"
          >
            SOBRE NÓS
          </Typography>
          <Typography
            variant="body1"
            className="description"
          >
            Bem-vindo ao Rei da Borracha, sua principal fonte de soluções em
            produtos e serviços de borracha há mais de duas décadas. Fundada com
            um compromisso inabalável com a qualidade e inovação, nossa empresa
            se destaca no mercado pelo fornecimento de produtos que garantem
            durabilidade, resistência e sustentabilidade. Desde nossa fundação,
            temos nos dedicado a atender uma ampla gama de necessidades
            industriais, comerciais e residenciais. Nossa equipe experiente não
            apenas oferece uma linha diversificada de produtos de borracha, mas
            também se empenha em fornecer um atendimento ao cliente excepcional
            e personalizado. Localizados estrategicamente, nossas instalações
            modernas e equipamentos de última geração nos permitem fabricar e
            distribuir produtos que atendem aos mais altos padrões de qualidade.
            Comprometidos com práticas sustentáveis, também investimos em
            tecnologias eco-friendly para minimizar nosso impacto ambiental. No
            Rei da Borracha, estamos sempre buscando formas de inovar e melhorar
            para superar as expectativas de nossos clientes. Seja para soluções
            industriais robustas, produtos personalizados ou assistência técnica
            especializada, confie no Rei da Borracha para ser seu parceiro
            confiável em todos os projetos.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} className="specialists-section">
        <br />
        <Box p={2} alignItems="center" className="fadeInAnimation">
          <Typography
            variant="h3"
            className="specialists-title"
          >
            Especialistas em Correias Industriais
          </Typography>
        </Box>
        <br />
      </Grid>

      <Grid
        className="fadeInAnimation cards-container"
        container
        spacing={4}
        alignItems="stretch"
        justifyContent="center"
        marginLeft={6}
        marginRight={6}
        marginBottom={20}
      >
        <Grid item xs={12} sm={4}>
          <Box
            p={2}
            className="card-box"
          >
            <Typography
              variant="h6"
              className="card-title"
            >
              Missão
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              className="card-description"
            >
              Tornar-se empresa referência e com credibilidade, oferecendo
              soluções cabíveis aos nossos clientes.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            p={2}
            className="card-box"
          >
            <Typography
              variant="h6"
              className="card-title"
            >
              Visão
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              className="card-description"
            >
              Consolidar a qualidade dos produtos oferecidos e atingir
              posicionamento de melhor parceira do mercado.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            p={2}
            className="card-box"
          >
            <Typography
              variant="h6"
              className="card-title"
            >
              Valores
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              className="card-description"
            >
              Ser empresa integra, honesta e que desenvolve o respeito comercial
              e humano aos nossos clientes, parceiros e fornecedores.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <GoogleMaps />
    </Grid>
  )
}
