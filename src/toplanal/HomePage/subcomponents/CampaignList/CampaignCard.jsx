import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, LinearProgress, Avatar, Divider, Tooltip } from '@mui/material';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import CampaignPhoto from '../../../CampaignPage/subcomponents/CampaignPhoto/CampaignPhoto';

const CampaignCard = ({ campaign }) => {
  console.log(campaign);
  const calculateProgress = () => {
    // Toplanma durumunu yüzdelik olarak hesaplayın
    return Math.round((campaign.currentBuyer / campaign.totalBuyerRequired) * 100);
  };

  const CampaignDescription = ({ description }) => {
    const maxLength = 50;
    const isOverflow = description.length > maxLength;
    const displayText = isOverflow ? `${description.slice(0, maxLength)}...` : description;

    return (
        <Tooltip title={description} disableHoverListener={!isOverflow}>
          <Typography variant="body2" color="text.secondary">
            {displayText}
          </Typography>
        </Tooltip>
    );
  };
  const CampaignTitle = ({ title }) => {
    const maxLength = 50;
    const isOverflow = title.length > maxLength;
    const displayText = isOverflow ? `${title.slice(0, maxLength)}...` : title;

    return (
        <Tooltip title={title} disableHoverListener={!isOverflow}>
          <Typography gutterBottom variant="h6" style={{fontWeight: 'bold'}} component="div">
            {displayText}
          </Typography>
        </Tooltip>
    );
  };



  return (
    <Card sx={{ maxWidth: 345, m: 2, maxLength: 250}}>
      <Box sx={{ position: 'relative' }}>
{/*        <CardMedia
          component="img"
          height="140"
          image= "/assets/images/img1.jpg" // Kampanya resmi burada kullanılıyor
          alt={campaign.title}
        />*/}
        <CampaignPhoto product={campaign} />
        <Box sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>
          {campaign.rating} ★
        </Box>
      </Box>
      <CardContent>

        <CampaignTitle title={campaign.title} />
        <CampaignDescription description={campaign.description} />


        {/* Kampanya Tarihleri */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Başlangıç: {campaign.campaignStartDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bitiş: {campaign.campaignEndDate}
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
