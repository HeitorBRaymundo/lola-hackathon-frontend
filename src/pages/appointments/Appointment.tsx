import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { LayoutContent } from '../../components/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../constant';


const Appointment: React.FC = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/events/appointments`)
      .then(({ data }) => {
        setAppointments(data.result.map((appointment: any) => ({
          id: appointment.PK,
          ...appointment
        })));
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'content', headerName: 'Evento', sortable: false, hideable: false, filterable: false, width: 500 },
    { field: 'doctor', headerName: 'Médico', sortable: false, hideable: false, filterable: false, width: 500 },
  ];

  return (
    <LayoutContent>
      <DataGrid
        rows={appointments}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </LayoutContent>
  );
};

export default Appointment;