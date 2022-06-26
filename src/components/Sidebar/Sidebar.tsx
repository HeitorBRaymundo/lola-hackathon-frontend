import * as React from 'react';
import { MenuItem, MenuList } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const SidebarMenu = styled.div`
  flex: 1;
  min-height: calc(100vh - 100px);
  box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 50%);
`;

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SidebarMenu>
      <MenuList>
        <MenuItem onClick={() => navigate('/')}>Dashboard</MenuItem>
        <MenuItem onClick={() => navigate('/saude-mental')}>Saúde mental</MenuItem>
        <MenuItem onClick={() => navigate('/consultas')}>Consultas</MenuItem>
        <MenuItem onClick={() => navigate('/lembretes')}>Lembretes</MenuItem>
        <MenuItem onClick={() => navigate('/medicamentos')}>Controle de medicamentos</MenuItem>
      </MenuList>
    </SidebarMenu>
  )
}