import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from './OrdersTableConfig.jsx';
import { StyledDataGrid } from '../../../styles/datagrid-tables/index.js';
import { LoadingBox } from '../../../styles/main/index.js';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useCommonModalContext } from '../../../context/CommonModalContext.jsx';
import UpdateOrderForm from './UpdateOrderForm.jsx';
import DeleteOrder from './DeleteOrder.jsx';
import UpdateClientForm from '../../clients/clients-table/UpdateClientForm.jsx';

const OrdersTableData = () => {
  const { value: { orders }} = useDataContext();
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;
    
    if (field === 'delete') {
      setCommonModalContent(<DeleteOrder orderID={row.id} orderDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }
    if (field === 'name') {
      let order = orders?.find(element => element.clientID === row.clientID);
      setCommonModalContent(<UpdateClientForm clientInfo={order.clientInfo} />)
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
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          sx={{fontWeight: '500', '& .MuiDataGrid-cell:hover': {color: 'primary.main'}}}
          onCellClick={handleOnCellClick}
          disableRowSelectionOnClick
        />
      </Box>
    }
    </>
  )
}

export default OrdersTableData;

