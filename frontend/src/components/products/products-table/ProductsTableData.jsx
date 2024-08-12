import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from './ProductsTableConfig.jsx';
import { StyledDataGrid } from '../../../styles/datagrid-tables/index.js';
import { LoadingBox } from '../../../styles/main/index.js';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useCommonModalContext } from '../../../context/CommonModalContext.jsx';
import UpdateProductForm from './UpdateProductForm.jsx';
import UpdateClientForm from '../../clients/clients-table/UpdateClientForm.jsx';
import DeleteProduct from './DeleteProduct.jsx';

const ProductsTableData = () => {
  const { value: { products }} = useDataContext();
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;
    
    if (field === 'delete') {
      setCommonModalContent(<DeleteProduct productID={row.id} productDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }
    if (field === 'name') {
      let product = products?.find(element => element.clientID === row.clientID);
      setCommonModalContent(<UpdateClientForm clientInfo={product.clientInfo} />)
      setCommonModalOpen(true);
      return;
    }

    setCommonModalContent(<UpdateProductForm productInfo={row} />)
    setCommonModalOpen(true);
    
  };

  useEffect(() => {
    setTableRows(handleSetRows(products));
  }, [products]);

  return (
    <>
    { !tableRows || !products ?
      <LoadingBox>
          <CircularProgress />
      </LoadingBox>

    : <Box sx={{ height: 'auto', width: '100%' }}>
        <StyledDataGrid
          rows={tableRows}
          columns={columns}
          columnVisibilityModel={{id: false, clientID:false}}
          initialState={{
            sorting: {
              sortModel: [{ field: 'updatedAt', sort: 'asc' }],
            },
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{fontWeight: '500', '& .MuiDataGrid-cell:hover': {color: 'primary.main'}}}
          onCellClick={handleOnCellClick}
          disableRowSelectionOnClick
        />
      </Box>
    }
    </>
  )
}

export default ProductsTableData;

