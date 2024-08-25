import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import Header from '../CampaignPage/subcomponents/CampaignHeader';
import ProductView from '../CampaignPage/subcomponents/ProductDetail/ProductView/index';
//import SimilarProduct from '../CampaignPage/subcomponents/ProductDetail/SimilarProduct';
import AppLoader from '@crema/components/AppLoader';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import CampaignPhoto from './subcomponents/CampaignPhoto/CampaignPhoto';
import Grid from "@mui/material/Grid";
import ProductSpecification from "./subcomponents/ProductDetail/ProductView/ProductSpecification.jsx";
import Divider from "@mui/material/Divider";
import ProductInfo from "./subcomponents/ProductDetail/ProductView/ProductInfo.jsx";
import Reviews from "./subcomponents/ProductDetail/ProductView/Reviews/index.jsx";

CampaignPhoto.propTypes = { product: PropTypes.any };
const CampaignPage = () => {
    const { id } = useParams();
    const [{ apiData: currentProduct, loading }, { setQueryParams }] =
        useGetDataApi('/api/ecommerce/get', {}, {}, false);

    useEffect(() => {
        setQueryParams({ id: 6 });
    }, [id]);

    return (
        <>
            {loading || isEmptyObject(currentProduct) ? (
                <AppLoader />
            ) : (
                <AppAnimate animation='transition.slideUpIn' delay={200}>
                    <AppCard>
                        <Header product={currentProduct} />
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <CampaignPhoto product={currentProduct} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ProductView product={currentProduct}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <ProductSpecification productSpec={currentProduct.productSpec || []} />
                                <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                                <ProductInfo productInfo={currentProduct.productInfo || []} />
                                <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                                <Reviews />
                            </Grid>
                        </Grid>
                        {/*<SimilarProduct />*/}
                    </AppCard>
                </AppAnimate>
            )}
            <AppInfoView />
        </>
    );
};

export default CampaignPage;

CampaignPage.propTypes = {
    match: PropTypes.object,
};
