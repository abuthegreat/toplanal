import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import CampaignPage from "../../../toplanal/CampaignPage/index.jsx";

const campaignPage = React.lazy(() =>
    import('../../../toplanal/CampaignPage/index.jsx'),
);
export const toplanAlCampaignConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: 'toplanal/CampaignPage',
    element: <CampaignPage />,
  },
];
