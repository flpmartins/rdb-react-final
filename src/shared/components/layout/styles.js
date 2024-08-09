import styled from 'styled-components'

export const GridContainer = styled.div`
  grid-template-columns: auto 14%;
  grid-template-rows: 25% auto;

  grid-template-areas:
    'HE HE'
    'CT CT';

  height: 100%;
  width: 100%;
`
