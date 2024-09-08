import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import { LightMode, DarkMode } from '@mui/icons-material'; // Import des icônes

const ThemeToggle = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setChecked(savedTheme === 'light'); // True = clair, False = sombre
    }, []);

    const handleChange = (event) => {
        const newTheme = event.target.checked ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setChecked(event.target.checked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <DarkMode style={{ marginRight: '8px' }} /> {/* Icône pour le mode sombre */}
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <LightMode style={{ marginLeft: '8px' }} /> {/* Icône pour le mode clair */}
        </div>
    );
};

export default ThemeToggle;