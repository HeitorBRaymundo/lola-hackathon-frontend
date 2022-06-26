import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { LayoutContent } from '../../components/Layout/Layout';


const Appointment: React.FC = () => {

  const columns: GridColDef[] = [
    { field: 'content', headerName: 'Evento', sortable: false, hideable: false, filterable: false, width: 500 },
    { field: 'doctor', headerName: 'Médico', sortable: false, hideable: false, filterable: false, width: 500 },
  ];

  const rows = [
    { id: 1, content: 'Agendado ortopedista para a próxima 6.ª feira às 17:00', doctor: 'Fulano de tal' },
    { id: 2, content: 'Agendado cardio para o dia 2022-06-30 às 15:00', doctor: 'Fulano de tal' },
    { id: 3, content: 'Agendado ortopedista para a próxima 2ª às 09:00', doctor: 'Fulano de tal' },
    { id: 4, content: 'Agendado cardiologista para o dia 2022-07-22 às 10:00', doctor: 'Fulano de tal' },
  ];

  return (
    <LayoutContent>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </LayoutContent>
  );
};

export default Appointment;