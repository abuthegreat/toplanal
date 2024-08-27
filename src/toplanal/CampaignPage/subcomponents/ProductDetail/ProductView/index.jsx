import React, {useEffect, useState} from 'react';
import {Box, Button, IconButton, Popover, Tooltip, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ProductSpecification from './ProductSpecification';
import ProductInfo from './ProductInfo';
import DeliveryInfo from './DeliveryInfo';
import Reviews from './Reviews';
import AvailableOffers from './AvailableOffers';
import PropTypes from 'prop-types';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import {linearProgressClasses} from "@mui/material/LinearProgress";
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const ProductView = ({ product }) => {

    const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 7,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[300],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 7,
            backgroundColor: theme.palette.primary.main,
        },
    }));
    const BuyerProgressBar = ({ totalBuyerRequired, currentBuyer }) => {
        const progress = (currentBuyer / totalBuyerRequired) * 100;

        return (
            <>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
                <PeopleIcon sx={{ ml: 1 }} />
                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {`Toplanma Durumu: ${currentBuyer} / ${totalBuyerRequired}`}
                </Typography>
                <StyledLinearProgress variant="determinate" value={progress} />
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    {`${Math.round(progress)}% toplanıldı`}
                </Typography>
            </Box>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
                <JoinButton />
            </Box>
        </>
        );
    };
    const InfoWithPopup = () => {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'info-popover' : undefined;

        return (
            <>
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <InfoIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>This is the additional information you want to display.</Typography>
                </Popover>
            </>
        );
    };
    const JoinButton = () => {
        return (
            <Button
                variant="contained"
                color="primary"
                sx={{
                    backgroundColor: '#FF6F61', // Canlı ve çekici bir renk
                    color: '#fff',
                    padding: '8px 20px',
                    borderRadius: '20px', // Yuvarlatılmış köşeler
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#FF4C3B', // Hover durumu için daha koyu bir ton
                    },
                }}
                startIcon={<PersonAddAltIcon />}
            >
                Sende Katıl
            </Button>
        );
    };
  return (
    <Grid item sm={12}>
        <Box component='h3' sx={{ color: 'text.primary', fontSize: 20, mb: 1 }}>
        <BuyerProgressBar
            totalBuyerRequired={product.totalBuyerRequired}
            currentBuyer={product.currentBuyer}
        />
      </Box>
        <Divider style={{ marginTop: 15, marginBottom: 15, borderBottomWidth: 2 }} />
        <Box component="h3" sx={{ color: 'text.primary', fontSize: 20, mb: 1, display: 'flex', justifyContent: 'space-between',alignItems: 'center'}} >
            <div>₺{+product.mrp - Math.round((+product.mrp * +product.discount) / 100)}</div>
            <Button variant="outlined" sx={{ color:'green', borderColor:'green'}}>Toplanma Sürüyor</Button>
        </Box>
        <Box component="h6" sx={{color: 'text.primary',fontSize: 15,mb: 1,display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} >
            <div>Fiyat toplanma tamamlandığında yeniden hesaplanacak!<InfoWithPopup /></div>
        </Box>
        <Box sx={{marginTop: '20px',color: 'primary.main',fontSize: 16,mb: 4 }} >
            Toplanma Başlangıç Tarihi:
            <br />
            {product.createdAt}
        </Box>
        <Box component='p' sx={{ color: 'text.secondary',textAlign: 'justify' }}>
            <strong>Toplanmayı başlatanın mesajı:</strong>
            <br />
            {product.campaignStarterText || 'No description found'}
        </Box>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <DeliveryInfo />
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
    </Grid>
  );
};

export default ProductView;

ProductView.propTypes = {
  product: PropTypes.object,
};
