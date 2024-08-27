import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CampaignCard from './CampaignCard';
import {useParams} from "react-router-dom";
import { useGetDataApi } from '@crema/hooks/APIHooks';
const CampaignList = () => {
/*  const campaigns = [
    {
      id: 1,
      title: 'Kampanya 1',
      description: 'Bu, Kampanya 1\'in açıklamasıdır.',
      image: 'img1.jpg',
      price: 1000,
      rating: 4,
      startDate: '2024-08-01',
      endDate: '2024-08-31',
      collectedAmount: 750, // Toplanan miktar
      targetAmount: 1000,   // Hedef miktar
      creatorName: 'John Doe',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 2,
      title: 'Kampanya 2',
      description: 'Bu, Kampanya 2\'nin açıklamasıdır.',
      image: '/images/img2.jpg',
      price: 839,
      rating: 4,
      startDate: '2024-09-01',
      endDate: '2024-09-30',
      collectedAmount: 500,
      targetAmount: 1000,
      creatorName: 'John Doe',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 3,
      title: 'Kampanya 3',
      description: 'Bu, Kampanya 3\'ün açıklamasıdır.',
      image: 'subcomponents/img1.jpg',
      price: 65,
      rating: 4,
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      collectedAmount: 900,
      targetAmount: 1200,
      creatorName: 'John Doe',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 4,
      title: 'Kampanya 1',
      description: 'Bu, Kampanya 1\'in açıklamasıdır.',
      image: 'img1.jpg',
      price: 1000,
      rating: 4,
      startDate: '2024-08-01',
      endDate: '2024-08-31',
      collectedAmount: 750, // Toplanan miktar
      targetAmount: 1000,   // Hedef miktar
      creatorName: 'John Doe',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 5,
      title: 'Kampanya 2',
      description: 'Bu, Kampanya 2\'nin açıklamasıdır.',
      image: '/images/img2.jpg',
      price: 839,
      rating: 4,
      startDate: '2024-09-01',
      endDate: '2024-09-30',
      collectedAmount: 500,
      targetAmount: 1000,
      creatorName: 'John Doe',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 6,
      title: 'Kampanya 3',
      description: 'Bu, Kampanya 3\'ün açıklamasıdır.',
      image: 'subcomponents/img1.jpg',
      price: 65,
      rating: 4,
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      collectedAmount: 900,
      targetAmount: 1200,
      creatorName: 'Ahmet Burak Yildirim',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 7,
      title: 'Kampanya 3',
      description: 'Bu, Kampanya 3\'ün açıklamasıdır.',
      image: 'subcomponents/img1.jpg',
      price: 65,
      rating: 4,
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      collectedAmount: 900,
      targetAmount: 1200,
      creatorName: 'Ahmet Burak Yildirim',
      creatorImage: '/assets/images/user1.jpg',
    },
    {
      id: 8,
      title: 'Kampanya 3',
      description: 'Bu, Kampanya 3\'ün açıklamasıdır.',
      image: 'subcomponents/img1.jpg',
      price: 65,
      rating: 4,
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      collectedAmount: 900,
      targetAmount: 1200,
      creatorName: 'Ahmet Burak Yildirim',
      creatorImage: '/assets/images/user1.jpg',
    },
  ];*/
  const { id } = useParams();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
      useGetDataApi('/api/ecommerce/get', {}, {}, false);

  useEffect(() => {
    setQueryParams({ id: 7 });
  }, [id]);


  return (
    <Grid container spacing={4}>
      {
        !loading && currentProduct ? (
            [currentProduct].map((campaign, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                <CampaignCard campaign={campaign} />
                </Grid>
            ))
        ) : (
            "loading"
        )
      }
    </Grid>
  );
};

export default CampaignList;
