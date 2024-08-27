import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, LinearProgress, Avatar, Divider } from '@mui/material';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';

const CampaignCard = ({ campaign }) => {
  const calculateProgress = () => {
    // Toplanma durumunu yüzdelik olarak hesaplayın
    return Math.round((campaign.collectedAmount / campaign.targetAmount) * 100);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="140"
          image= "/assets/images/img1.jpg" // Kampanya resmi burada kullanılıyor
          alt={campaign.title}
        />
        <Box sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>
          {campaign.rating} ★
        </Box>
      </Box>
      <CardContent>

        <Typography gutterBottom variant="h6" component="div">
          {campaign.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {campaign.description}
        </Typography>

        {/* Kampanya Tarihleri */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Başlangıç: {campaign.startDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bitiş: {campaign.endDate}
        </Typography>

        {/* İlerleme Çubuğu */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Toplanma Durumu: %{calculateProgress()} 
          </Typography>
          <LinearProgress variant="determinate" value={calculateProgress()} />
        </Box>
        

        {/* Sadece Fiyat */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box>
            <Typography variant="h6">${campaign.price}</Typography>
          </Box>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteBorder />
            </IconButton>
            <IconButton aria-label="add to cart">
              <ShoppingCart />
            </IconButton>
          </Box>
        </Box>

         {/* Çizgi (Divider) */}
        <Divider sx={{ my: 2 }} />

        {/* Kampanyayı açan kişinin fotoğrafı ve ismi */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={campaign.creatorImage} alt={campaign.creatorName} sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {campaign.creatorName}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
