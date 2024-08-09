import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Drawer } from '@material-ui/core';

import { Container, Content, List, ListItem } from './styles'
import { useDrawerContext } from '../../../hooks/DrawerContext';

export const Aside = () => {
  const navigate = useNavigate()
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <Container className={isDrawerOpen ? 'drawer-open' : ''}>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => toggleDrawerOpen(false)}>
        <Content>
          <List>
            <ListItem onClick={() => navigate('/')}>
              <span>Início</span>
            </ListItem>
            <br />
            <br />
            <ListItem onClick={() => navigate('/contact')}>
              <span>atendimento</span>
            </ListItem>
            <br />
            <br />
            <ListItem onClick={() => navigate('/equipe/objetivo')}>
              <span>Objetivo</span>
            </ListItem>
            <br />
            <br />
            <ListItem onClick={() => navigate('/products')}>
              <span>produtos</span>
            </ListItem>
          </List>
        </Content>
      </Drawer>
    </Container>
  )
}