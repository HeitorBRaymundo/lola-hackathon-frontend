import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { 
  Card, 
  CardContent,
  TextField,
} from '@mui/material';

import { LayoutContent } from '../../components/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../constant';

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

  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/reports/1`)
      .then(({ data }) => {
        setReports(data.result.map((r: any, i: number) => ({ key: i, ...r })))
      });
  }, []);

  const questions = [
    'Você está satisfeito com a vida?',
    'Você se aborréce facilmente?',
    'Você se sente desamparado?',
    'Você prefere ficar em casa ao invés de sair e fazer coisas diferentes?',
    'Atualmente você se sente inútil?',
  ];

  return (
    <LayoutContent>
      <Section>
        <CustomCard>
          <CardContent>
            <h2>Teste de escala de Depressão Geriátrica</h2>
            <Questions>
              {questions.map((question, i) => {
                return (
                  <Question id="outlined-basic" label={`Pergunta ${i + 1}`} variant="outlined" value={question}/>
                )
              })}
            </Questions>
          </CardContent>
        </CustomCard>

        {reports.map((report: any, i: number) => {
          return (
            <CustomCard key={i}>
              <CardContent>
                <h2>Respostas de {report.date}</h2>
                <Questions>
                  {report.answers.map((answer: any, i: number) => {
                    return (
                      <Question key={i} id="outlined-basic" label={`Pergunta ${i + 1}`} variant="outlined" value={answer} disabled/>
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