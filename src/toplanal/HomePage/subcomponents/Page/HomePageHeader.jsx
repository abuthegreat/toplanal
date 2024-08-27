import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';

// Search Bileşeni için stil tanımlamaları
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1), // Arka plan rengini hafif gri yaptık
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#333', // İkonun rengini daha koyu yaptık
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333', // Metin rengini koyu yaptık
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const HomePageHeader = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#f7f7f7', py: 3, borderRadius: '8px', marginBottom: '16px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: '#555' }}>
              Toplanal ile hızlıca kampanya başlatın ve kitlenizle buluşun. Kampanyalarınızı kolayca yönetin ve başarıya ulaşın!
            </Typography>
            <Button variant="contained" color="primary" sx={{ fontWeight: 'bold', ml: 2 }}>
              Kampanya Oluştur
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePageHeader;
