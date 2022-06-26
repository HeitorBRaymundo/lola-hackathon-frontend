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
import ReactSpeedometer, { CustomSegmentLabelPosition } from 'react-d3-speedometer';

import foto from './foto.jpeg';

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
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
        label: 'Média indicada',
        data: [5, 5, 5, 5, 5, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Nr de registros no último mês',
        data: [4, 3, 4, 2, 3, 6],
        backgroundColor: 'rgba(136 199 183, .1)',
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
                    <Avatar sx={{ bgcolor: deepOrange[500] }} src={foto}> MS </Avatar>
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
                  <ReactSpeedometer
                    maxValue={100}
                    value={53}
                    currentValueText="I.F.L"
                    height={200}
                    customSegmentLabels={[
                      {
                        text: "Muito mal",
                        position: CustomSegmentLabelPosition.Inside,
                        color: "#555",
                      },
                      {
                        text: "Mal",
                        position: CustomSegmentLabelPosition.Inside,
                        color: "#555",
                      },
                      {
                        text: "Razoável",
                        position: CustomSegmentLabelPosition.Inside,
                        color: "#555",
                        fontSize: "19px",
                      },
                      {
                        text: "Bom",
                        position: CustomSegmentLabelPosition.Inside,
                        color: "#555",
                      },
                      {
                        text: "Muito bom",
                        position: CustomSegmentLabelPosition.Inside,
                        color: "#555",
                      },
                    ]}
                  />
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