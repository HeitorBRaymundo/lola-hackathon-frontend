import * as React from 'react';
import styled from 'styled-components';

import { 
  Card, 
  CardContent,
  TextField,
} from '@mui/material';

import { LayoutContent } from '../../components/Layout/Layout';

const CustomCard = styled(Card)`
  margin-right: 16px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Question = styled(TextField)`
  margin-bottom: 16px !important;
`;

const MentalHealth: React.FC = () => {

  const questions = [
    'Você está satisfeito com a vida?',
    'Você se aborréce facilmente?',
    'Você se sente desamparado?',
    'Você prefere ficar em casa ao invés de sair e fazer coisas diferentes?',
    'Atualmente você se sente inútil?',
  ];

  const answersReport = [{
    date: '24/05/2022',
    anwsers: [
      'Sim',
      'Não',
      'Sim',
      'Sim',
      'Não'
    ]
  }, {
    date: '24/05/2022',
    anwsers: [
      'Sim',
      'Não',
      'Sim',
      'Sim',
      'Não'
    ]
  }, {
    date: '24/05/2022',
    anwsers: [
      'Sim',
      'Não',
      'Sim',
      'Sim',
      'Não'
    ]
  }];

  return (
    <LayoutContent>
      <Section>
        <CustomCard>
          <CardContent>
            <h2>Check-up saúde mental (depressão)</h2>
            <Questions>
              {questions.map((question, i) => {
                return (
                  <Question id="outlined-basic" label={`Pergunta ${i + 1}`} variant="outlined" value={question}/>
                )
              })}
            </Questions>
          </CardContent>
        </CustomCard>

        {answersReport.map((report) => {
          return (
            <CustomCard>
              <CardContent>
                <h2>Respostas de {report.date}</h2>
                <Questions>
                  {report.anwsers.map((answer, i) => {
                    return (
                      <Question id="outlined-basic" label={`Pergunta ${i + 1}`} variant="outlined" value={answer} disabled/>
                    )
                  })}
                </Questions>
              </CardContent>
            </CustomCard>
          )
        })}
      </Section>
    </LayoutContent>
  );
}

export default MentalHealth;