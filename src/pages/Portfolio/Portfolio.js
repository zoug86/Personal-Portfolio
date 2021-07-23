import React, { useState } from 'react';
import { Grid, Typography, Grow, Card, Tabs, Tab, CardActionArea, CardMedia, CardContent, CardActions, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

// styles
import './Portfolio.css';


const Portfolio = () => {

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    const handleChange = (e, newTab) => {
        setTabValue(newTab);
    }
    const handleClose = () => {
        setProjectDialog(false);
    }

    return (
        <div style={{ padding: 5 }}>
            <Grid container spacing={2} className="section pb-45 pt-45">
                <Grid container>
                    <Grid item className="section-title bottom-40">
                        <span></span>
                        <h5 className="section-title-text">Portfolio</h5>
                    </Grid>
                </Grid>
                {/* Tabs */}
                <Grid item xs={12}>
                    <Tabs className="customTabs" value={tabValue} indicatorColor="white"
                        onChange={handleChange}>
                        <Tab label="All" value='All' className={tabValue === 'All' ? 'customTabs-item-active' : 'customTabs-item'} />
                        {[...new Set(resumeData.projects.map(project => project.tag))].map((tag, i) => (
                            <Tab key={i} label={tag} value={tag} className={tabValue === tag ? "customTabs-item-active" : "customTabs-item"} />
                        ))}
                    </Tabs>
                </Grid>

                {/* Projects */}
                <Grid item xs={12}>
                    <Grid container spacing={5} className="pb-45 bottom-40">
                        {resumeData?.projects?.map(project => (
                            <>
                                {tabValue === project.tag || tabValue === "All" ? (
                                    <Grow in timeout={1500}>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card key={project.title} className="custom-card" onClick={() => setProjectDialog(project)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className="custom-card-image"
                                                        component="img"
                                                        alt={project.title}
                                                        height="160"
                                                        image={project.images[0]}
                                                        title={project.title}
                                                    />
                                                    <CardContent>
                                                        <Typography variant="body1" className="custom-card-title">
                                                            {project.title}
                                                        </Typography>
                                                        <Typography className="custom-card-caption" variant="caption" color="textSecondary" component="p">
                                                            {project.caption}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>

                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grow>
                                ) : null}

                            </>

                        ))}
                    </Grid>
                </Grid>
                <Dialog maxWidth="md"
                    className="project-dialog" onClose={handleClose} open={projectDialog}>
                    <DialogTitle onClose={handleClose}>
                        {projectDialog.title}
                    </DialogTitle>

                    <DialogContent dividers>
                        {projectDialog.images && (
                            <ImageGallery images={projectDialog.images} />
                        )}
                        <Typography gutterBottom className="project-dialog-description">
                            {projectDialog.description}
                        </Typography>
                    </DialogContent>
                    <DialogActions className="project-dialog-actions">
                        {projectDialog?.links?.map((link, i) => (
                            <a key={i} href={link.link} target="_blank" rel="noreferrer" className="project-dialog-icon">
                                {link.icon}
                            </a>
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid >
        </div>

    )
}

export default Portfolio;

