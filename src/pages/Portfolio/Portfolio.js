import React, { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';


// styles
import './Portfolio.css';
import ProjectPosts from '../../components/ProjectPosts';


const Portfolio = ({ history }) => {

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    const handleChange = (e, newTab) => {
        setTabValue(newTab);
        //history.push('/Portfolio')
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
                    <Tabs className="customTabs" value={tabValue}
                        onChange={handleChange}>
                        <Tab label="All" value='All' className={tabValue === 'All' ? 'customTabs-item-active' : 'customTabs-item'} />
                        {[...new Set(resumeData.projects.map(project => project.tag))].map((tag, i) => (
                            <Tab key={i} label={tag} value={tag} className={tabValue === tag ? "customTabs-item-active" : "customTabs-item"} />
                        ))}
                    </Tabs>
                </Grid>

                {/* Projects */}
                <Grid item xs={12}>
                    <ProjectPosts tabValue={tabValue} setTabValue={setTabValue} setProjectDialog={setProjectDialog} />
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

