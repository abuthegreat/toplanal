import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomerItem from './CustomerItem';

const RecentMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Angelina Joew',
      message: 'added courses to the new bucket.',
      joinedDate: '2024-08-25',
      image: '/images/member1.jpg',
    },
    {
      id: 2,
      name: 'John Mathew',
      message: 'liked company website design.',
      joinedDate: '2024-08-23',
      image: '/images/member2.jpg',
    },
    {
      id: 3,
      name: 'George Bailey',
      message: 'followed your works.',
      joinedDate: '2024-08-22',
      image: '/images/member3.jpg',
    },
    {
      id: 4,
      name: 'Maria Lee',
      message: 'liked origami-creativity agency.',
      joinedDate: '2024-08-20',
      image: '/images/member4.jpg',
    },
    {
      id: 5,
      name: 'Angelina Joew',
      message: 'added courses to the new bucket.',
      joinedDate: '2024-08-18',
      image: '/images/member1.jpg',
    },
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: '8px', marginBottom: '16px' }}>
      
      {members.map((member) => (
        <CustomerItem key={member.id} item={member} />
      ))}
    </Box>
  );
};

export default RecentMembers;
