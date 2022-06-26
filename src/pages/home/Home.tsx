import * as React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { LayoutContent } from '../../components/Layout/Layout';
import styled from 'styled-components';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AvatarCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const IFLCard = styled(CardContent)`
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {

  const data = {
    labels: ['Alimentação', 'Exercícios', 'Entretenimento', 'Saúde mental', 'Sono', 'Hidratação'],
    datasets: [
      {
        label: 'Nr de registros no último mês',
        data: [4, 3, 4, 1, 3, 6],
        backgroundColor: 'rgba(136 199 183, .4)',
        borderColor: 'rgb(136 199 183)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <LayoutContent>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card>
                <AvatarCardContent>
                  <Row>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}> MS </Avatar>
                    <NameSection>
                      <p>
                        <strong>Melinda Silva</strong> <br />
                        (19) 99129-2121
                      </p>
                    </NameSection>
                  </Row>
                  <p>
                    <strong>Idade</strong> 65 anos <br /> <br />
                    <strong>Gênero</strong> Feminino <br /> <br />
                    <strong>Altura</strong> 155cm <br /> <br />
                    <strong>Peso</strong> 60Kg <br /> <br />
                  </p>
                </AvatarCardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <h3>Últimas consultas</h3>
                  <p><strong>Dra Dulce:</strong> Pediatra</p>
                  <p><strong>Dra Fabi:</strong> Cardio</p>
                  <p><strong>Dra Carla:</strong> Psiquiatra</p>
                  <p><strong>Dr Marco:</strong> Geriatra</p>
                </CardContent>
              </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <h3>Lembretes</h3>
                <h4>Recorrentes:</h4>
                <p><strong>Tomar Forxiga</strong> 12:00h</p>

                <h4>Próximos:</h4>
                <p><strong>Consulta oftalmo</strong> 03/07 12:00h</p>
                <p><strong>Retorno Dra Dulce</strong> 20/07 15:00h</p>

              </CardContent>
            </Card>
          </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Radar data={data} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <IFLCard>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Column>
                        <h2>I.F.L</h2>
                        <h3>76</h3>
                      </Column>
                    </Grid>
                    <Grid item xs={9}>
                    </Grid>
                  </Grid>
                </IFLCard>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutContent>
  );
}

export default Home;