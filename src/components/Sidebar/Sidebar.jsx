import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

function Sidebar() {
    
    const navigate = useNavigate();
    
    return (
        <div className='sidebar'>
            <Button style={{color: 'white'}} onClick={() => navigate('/home')}>Home</Button>
            <Button style={{color: 'white'}} onClick={() => navigate('/roupas')}>Roupas</Button>
        </div>
    )
}

export default Sidebar;