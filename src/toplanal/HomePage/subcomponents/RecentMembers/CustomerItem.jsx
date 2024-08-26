import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const CustomerItem = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px',
        borderBottom: '1px solid #ECEDF1',
        '&:last-child': {
          borderBottom: 'none',
        },
      }}
      className='item-hover'
    >
      <Avatar
        sx={{
          width: 42,
          height: 42,
          mr: 3,
        }}
        src={item.image}
        alt={item.name}
      />
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: Fonts.MEDIUM,
            fontSize: 14,
          }}
          component="div"
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: 'text.secondary',
          }}
          component="div"
        >
          {item.message}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: '3px 10px',
            borderRadius: '15px',
            backgroundColor: '#f0f0f0',
            fontSize: 12,
          }}
        >
          Joined: {item.joinedDate}
        </Box>
        <IconButton
          aria-label='more'
          aria-controls='long-menu'
          aria-haspopup='true'
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

CustomerItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CustomerItem;
