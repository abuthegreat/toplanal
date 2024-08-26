import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', py: 4, borderRadius: '8px', mt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Sol Taraf: Footer Başlığı */}
          <Box sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Toplanal
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Toplanal ile kampanyalarınızı kolayca yönetin ve başarıya ulaşın.
            </Typography>
          </Box>

          {/* Sağ Taraf: Sosyal Medya İkonları */}
          <Box>
            <IconButton aria-label="Facebook" sx={{ color: '#fff' }} href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ color: '#fff' }} href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ color: '#fff' }} href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton aria-label="LinkedIn" sx={{ color: '#fff' }} href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="inherit">
            © 2024 Toplanal. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
