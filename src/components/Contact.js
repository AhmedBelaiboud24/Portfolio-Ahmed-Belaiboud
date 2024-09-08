import React, { useEffect, useState } from "react";
import '../styles/Contact.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import illustration from '../assets/undraw_contact_us_re_4qqt.svg';

function Contact() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true);
        };

        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="footCont">
            <h2>Contactez-moi</h2>
            <div className="Conteneur-contact" id="contact">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <div className="contact-rapide">
                            <img src={illustration} alt="illustration-contact"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} className={`form-container ${loaded ? 'loaded' : ''}`}>
                        <form className="formulaire" action="https://formspree.io/f/xkgwebod" method="POST">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#FFFFFF',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#000000',
                                                },
                                                backgroundColor: 'var(--section-background-color)',
                                                color: '#ffffff',
                                                width: '100%',
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#ffffff',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#87cefa',
                                            },
                                        }}
                                    >
                                        <TextField name="nom" id="outlined-nom" label="Nom" variant="outlined" fullWidth />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#FFFFFF',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#B0B0B0',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00bfff',
                                                },
                                                backgroundColor: 'var( --section-background-color)',
                                                color: '#ffffff',
                                                width: '100%',
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#ffffff',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#87cefa',
                                            },
                                        }}
                                    >
                                        <TextField name="prenom" id="outlined-prenom" label="Prénom" variant="outlined" fullWidth />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#FFFFFF',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#B0B0B0',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00bfff',
                                                },
                                                backgroundColor: 'var( --section-background-color)',
                                                color: '#ffffff',
                                                width: '100%',
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#ffffff',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#87cefa',
                                            },
                                        }}
                                    >
                                        <TextField name="email" id="outlined-email" label="Email" variant="outlined" fullWidth />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#FFFFFF',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#B0B0B0',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00bfff',
                                                },
                                                backgroundColor: 'var( --section-background-color)',
                                                color: '#ffffff',
                                                width: '100%',
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#ffffff',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#87cefa',
                                            },
                                        }}
                                    >
                                        <TextField
                                            name="message"
                                            id="outlined-message"
                                            label="Message"
                                            placeholder="Votre message"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type='submit' fullWidth>
                                        Envoyer
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Contact;