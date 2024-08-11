import { BodyText, BodyTextTitle, LoadingBox } from '../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddNewElementBtn from '../components/common/AddNewElementBtn';
import LayoutTitle from '../layouts/common/LayoutTitle';
import { useDataContext } from '../context/DataContext';
import useGetProducts from '../hooks/products/useGetProducts';
import CreateProductForm from '../components/products/CreateProductForm';
import ProductsTableData from '../components/products/products-table/ProductsTableData';
import ProductsHeaderSummary from '../components/products/ProductsHeaderSummary';
import { PagesHeaderActionsContainer } from '../styles/main/pages-header-actions';

const Products = () => {
    const { value: {clients, products, setProducts}} = useDataContext();
    const { loadingProducts, getProducts } = useGetProducts();

    const handleGetProducts = async () => {
        const data = await getProducts();
        if (data) setProducts(data);
    }

    useEffect(() => {
        handleGetProducts();
    }, [clients]);

    return (
    <>
        <Stack mb={2}>
            <LayoutTitle icon={<ShoppingCartCheckoutIcon sx={{fontSize:'30px'}} />} title={'List of '} titleSpan={'Products'} />
        </Stack>

        { loadingProducts && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}

        { !loadingProducts && products && (
            <>  
                <PagesHeaderActionsContainer>
                    <Stack direction={'row'} alignItems={'center'} mb={1}>
                        <BodyTextTitle variant='subtitle1'>Active Products</BodyTextTitle>
                        <AddNewElementBtn title={'Add new product'} modalContent={<CreateProductForm />} />
                    </Stack>
                    <ProductsHeaderSummary />
                </PagesHeaderActionsContainer>

                { products?.length === 0  && <BodyText variant='subtitle2'>No products created yet</BodyText> }

                { products.length > 0 && <ProductsTableData /> }
            </>
        )}
    </>
    )
}

export default Products;