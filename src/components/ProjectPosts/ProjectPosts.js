import React, { useState } from 'react'
import { Grid, Typography, Grow, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import Pagination from '../Pagination/Pagination';

const ProjectPosts = ({ tabValue, setProjectDialog }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);
    let currentProjects = [];
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    currentProjects = (tabValue === 'All' ? resumeData?.projects?.slice(indexOfFirstProject, indexOfLastProject) : resumeData?.projects);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    if (!currentProjects.length) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <Grid container spacing={5} className="pb-45 bottom-40">
                {currentProjects.map((project, i) => (
                    <>
                        {tabValue === project.tag || tabValue === "All" ? (
                            <Grow in timeout={1500}>
                                <Grid key={i} item xs={12} sm={6} md={4}>
                                    <Card className="custom-card" onClick={() => setProjectDialog(project)}>
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
            {tabValue === 'All' ? (
                <Pagination projectsPerPage={projectsPerPage} totalProjects={resumeData?.projects?.length} paginate={paginate} />) : null}
        </>
    )
}

export default ProjectPosts

