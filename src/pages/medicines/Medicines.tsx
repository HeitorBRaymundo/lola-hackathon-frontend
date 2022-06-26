import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TextField, Button, Grid } from '@mui/material';
import styled from 'styled-components';


import { LayoutContent } from '../../components/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const CustomInput = styled(TextField)`
  width: 100%;
`;

const CustomGrid = styled(Grid)`
  margin-bottom: 16px;
`;

const Medicines: React.FC = () => {

  const [text, setText] = useState('');
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/events/medicines`)
      .then(({ data }) => {
        setMedicines(data.result.map((medicine: any) => ({
          id: medicine.PK,
          ...medicine
        })));
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Remédio', sortable: false, hideable: false, filterable: false, width: 500 },
  ];

  const handleInput = ({ target: { value }}: any) => {
    setText(value);
  }

  const saveEvent = async () => {
    await axios.post(`${BASE_URL}/events`, {
      name: text,
      type: 'medicines',
    });

    axios
      .get(`${BASE_URL}/events/medicines`)
      .then(({ data }) => {
        setMedicines(data.result.map((medicine: any) => ({
          id: medicine.PK,
          ...medicine
        })));
      });
  }

  return (
    <LayoutContent>
      <>
        <CustomGrid container spacing={2}>
          <Grid item xs={8}>
            <CustomInput id="outlined-basic" label="Medicamento" variant="outlined" value={text} onChange={handleInput} />
          </Grid>

          <Grid item xs={4}>
            <Button onClick={saveEvent}>Salvar</Button>
          </Grid>
        </CustomGrid>

        <DataGrid
          rows={medicines}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </>
      
    </LayoutContent>
  );
};

export default Medicines;