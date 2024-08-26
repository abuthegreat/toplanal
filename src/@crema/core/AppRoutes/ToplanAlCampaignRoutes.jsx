import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import CampaignPage from "../../../toplanal/CampaignPage/index.jsx";
import HomePage from "../../../toplanal/HomePage/HomePage.jsx";

const campaignPage = React.lazy(() =>
    import('../../../toplanal/CampaignPage/index.jsx'),
    import('../../../toplanal/HomePage/HomePage.jsx'),
);
export const toplanAlCampaignConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: 'toplanal/CampaignPage',
    element: <CampaignPage />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: 'toplanal/HomePage',
    element: <HomePage />,
  },
  
];
