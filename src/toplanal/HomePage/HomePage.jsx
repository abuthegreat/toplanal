import React from 'react';
import HomePageHeader from './subcomponents/Page/HomePageHeader';
import CampaignList from './subcomponents/CampaignList/CampaignList';
import RecentMembers from './subcomponents/RecentMembers/RecentMembers';
import Footer from './subcomponents/Page/Footer';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Devam Eden Kampanyalar
        </Typography>
        <CampaignList />
      </Container>

      {/* "Son Katılan Üyeler" başlığı ile bileşenin üstünde yer alacak */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Son Katılan Üyeler
        </Typography>
        <RecentMembers />
      </Container>

      <Box sx={{ mt: 8 }}>
        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;