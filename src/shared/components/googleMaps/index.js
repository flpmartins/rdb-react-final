import { Box } from '@mui/material'

export const GoogleMaps = () => {

  return (  
  <Box
    className="fadeInAnimation"
    sx={{
      width: '100%',
      display: 'flex',
      padding: '10px 0px 0px 0px',
      background: 'linear-gradient(to right, #cc0000, #990000, #660000)',
    }}
  >
    <iframe
      className="fadeInAnimation"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4838017933785!2d-47.636577724787365!3d-22.673026979420296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1561c7486addc8b%3A0x31051e6706efcc4c!2sRei%20da%20Borracha%20de%20Piracicaba!5e0!3m2!1spt-BR!2sbr!4v1703611137544!5m2!1spt-BR!2sbr"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </Box>
  )

}
