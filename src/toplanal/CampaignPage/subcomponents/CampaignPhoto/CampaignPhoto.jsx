import { useState } from 'react';
import { Button, Checkbox,lighten } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { styled } from '@mui/material/styles';
import { useInfoViewActionsContext } from '../../../../@crema/context/AppContextProvider/InfoViewContextProvider';

const BrainHubSliderRoot = styled(Box)(() => {
    return {
        position: 'relative',
        display: 'flex',
    };
});

const MediaSlider = ({ children }) => {
    return (
        <Box
            sx={{
                width: '100%',
                '& .slick-slider': {
                    pb: 5,
                },
                '& .slick-track': {
                    display: 'flex',
                    '& .slick-slide': {
                        height: '500px',
                        '& > div': {
                            height: '100%',
                        },
                    },
                },
                '& .slick-slide img': {
                    display: 'inline-block',
                },
                '& .slick-dots': {
                    bottom: 0,
                    // display: 'flex !important',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // listStyle: 'none',
                    // gap: '10px',

                    '& li': {
                        width: 10,
                        height: 10,
                        '& button': {
                            width: 10,
                            height: 10,
                            padding: 0,
                            // borderRadius: '50%',
                            // backgroundColor: (theme) =>
                            //   lighten(theme.palette.common.black, 0.5),
                            // color: (theme) => lighten(theme.palette.common.black, 0.5),
                            // overflow: 'hidden',
                        },
                        '& button:before': {
                            fontSize: 0,
                            backgroundColor: (theme) =>
                                lighten(theme.palette.common.black, 0.5),
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                        },
                    },
                },
            }}
        >
            {children}
        </Box>
    );
};

const CampaignPhoto = ({ product }) => {
    const [value, setValue] = useState(0);
    const infoViewActionsContext = useInfoViewActionsContext();
    const navigate = useNavigate();

    const onChange = (value) => {
        setValue(value);
    };

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Grid>
            <BrainHubSliderRoot>
                <MediaSlider>
                    <div
                        style={{
                            height: 'auto',
                            width: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <Slider {...settings}>
                            {product.image.map((item, index) => (
                                <Box key={index} sx={{ px: 3, py: 3, height: '100%' }}>
                                    <img
                                        src={item.src}
                                        alt='watch'
                                        // width={191}
                                        // height={259}
                                        // sizes='100vh'
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </div>
                </MediaSlider>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 2,
                    }}
                >
                    <Checkbox
                        sx={{
                            color: (theme) => theme.palette.warning.main,
                            '&.Mui-checked': {
                                color: (theme) => theme.palette.warning.main,
                            },
                        }}
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteOutlinedIcon />}
                    />
                </Box>
            </BrainHubSliderRoot>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 5,
                }}
            >
            </Box>
        </Grid>
    );
};

export default CampaignPhoto;

CampaignPhoto.propTypes = {
    product: PropTypes.object,
};
