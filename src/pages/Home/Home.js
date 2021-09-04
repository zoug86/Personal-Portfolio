import React, { useContext } from 'react';
import { Grid, Typography, Paper, Icon } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import { ToggleContext } from '../../context/ToggleContext';

import TimelineDot from '@material-ui/lab/TimelineDot';


//Styles
import './Home.css';

const Home = () => {
    const { toggle } = useContext(ToggleContext);
    const modeBg = !toggle ? { background: '#1d1d01' } : { background: 'white' };
    const modeColor = !toggle ? { color: 'white' } : { color: 'black' };
    return (
        <>
            {/* // About Me */}
            <Grid container className="section pt-45" style={modeBg}>
                <Grid item className="section-title bottom-40">
                    <span></span>
                    <h5 className="section-title-text" style={modeColor}>About Me</h5>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="about-me-text" style={modeColor}>{resumeData.about}</Typography>
                </Grid>
            </Grid >
            {/* // General Skills */}
            <Grid container className="section whitebg pt-45" style={modeBg}>
                <Grid item className="section-title bottom-40">
                    <span></span>
                    <h5 className="section-title-text" style={modeColor}>Soft Skills</h5>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='space-around'>
                        {resumeData.services.map((service, i) => (
                            <Grid key={i} item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Icon className="service-icon">{service.icon}</Icon>
                                    <Typography className="service-title" variant="h6" style={modeColor}>{service.title}</Typography>
                                    <Typography className="service-description" variant="body2">{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* // Technical Skills */}
            <Grid container className="section pb-60 pt-45" style={modeBg}>
                <Grid item className="section-title bottom-40">
                    <span></span>
                    <h5 className="section-title-text" style={modeColor}>Tech Skills</h5>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='space-around'>
                        {resumeData.skills.map((skill, i) => (
                            <Grid key={i} item xs={12} sm={6} md={3}>
                                <Paper elevation={1} className="skill" style={modeBg}>
                                    <Typography className="skill-title" variant="h6" style={modeColor}>{skill.title}</Typography>
                                    {skill.description.map((elem, i) => (
                                        <Typography key={i} className="skill-description" variant="body2">
                                            <TimelineDot variant='outlined' className="skill-dot" />{elem}
                                        </Typography>
                                    ))}

                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>


    )
}


export default Home
