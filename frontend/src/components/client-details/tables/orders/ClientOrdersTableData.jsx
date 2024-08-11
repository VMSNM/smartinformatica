import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from '../../../services/services-table/ServicesTableConfig.jsx';
import { StyledDataGrid } from '../../../../styles/datagrid-tables/index.js';
import { BodyText, LoadingBox } from '../../../../styles/main/index.js';
import { useCommonModalContext } from '../../../../context/CommonModalContext.jsx';
import DeleteOrder from '../../../orders/orders-table/DeleteOrder.jsx';
import UpdateOrderForm from '../../../orders/orders-table/UpdateOrderForm.jsx';
import { useClientDataContext } from '../../../../context/ClientDataContext.jsx';

const ClientOrdersTableData = () => {
  const { value: {clientData}} = useClientDataContext();
  const { orders } = clientData;
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;

    if (field === 'delete') {
      setCommonModalContent(<DeleteOrder orderID={row.id} orderDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }

    setCommonModalContent(<UpdateOrderForm orderInfo={row} />)
    setCommonModalOpen(true);
    
  };

  useEffect(() => {
    setTableRows(handleSetRows(orders));
  }, [orders]);

  return (
    <>
    { !tableRows || !orders ?
      <LoadingBox>
          <CircularProgress />
      </LoadingBox>

    : orders.length === 0 ? 
      <BodyText>No orders</BodyText>

    :
      <Box sx={{ height: 'auto', width: '100%' }}>
        <StyledDataGrid
          rows={tableRows}
          columns={columns}
          columnVisibilityModel={{id: false, clientID:false}}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: 'asc' }],
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

export default ClientOrdersTableData;

