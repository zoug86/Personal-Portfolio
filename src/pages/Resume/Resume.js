import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeperator } from '../../components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { School, Work } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import AttachFileIcon from '@material-ui/icons/AttachFile';

// styles
import './Resume.css';

const Resume = () => {
    return (
        <Grid container className="section pb-60 pt-45">
            <Grid item className="section-title bottom-40">
                <span></span>
                <h5 className="section-title-text">Resume</h5>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="resume-timeline">
                    {/* Work History */}
                    <Grid item sm={12} md={6}>

                        <CustomTimeline title={"Experience"} icon={<Work />}>
                            {resumeData.experiences.map((experience, i) => (
                                <TimelineItem key={i}>
                                    <CustomTimelineSeperator />
                                    <TimelineContent className="timeline-content">
                                        <Typography className="timeline-title">
                                            <img className="experience-logo" src={experience.logo} width="50px" alt="logo" />{experience.title}</Typography>
                                        <Typography variant='caption' className="timeline-date">{experience.date}</Typography>
                                        <Typography className="timeline-company">{experience.company}</Typography>
                                        <Typography variant='body2' className="timeline-description">{experience.description}</Typography>
                                        <Typography variant='body2' className="timeline-publicaiton">
                                            {experience.publication && (<span>IEEE Publication <a href={experience.publication} target="_blank" rel="noreferrer"><AttachFileIcon /></a></span>)}
                                        </Typography>
                                        <Typography variant='body2' className="timeline-publicaiton">
                                            {experience.publication && (<span>Read <a href='https://dspace.library.uvic.ca/bitstream/handle/1828/11722/Marzougui_Houssem_MASc_2020.pdf?sequence=3&isAllowed=y' target="_blank" rel="noreferrer">here</a> </span>)}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title={"Education"} icon={<School />}>
                            {resumeData.educations.map((education, i) => (
                                <TimelineItem key={i}>
                                    <CustomTimelineSeperator />
                                    <TimelineContent className="timeline-content">
                                        <Typography className="timeline-title">
                                            <img className="education-logo" src={education.logo} width="50px" alt="logo" />{education.title}</Typography>
                                        <Typography variant='caption' className="timeline-date">{education.date}</Typography>
                                        <Typography className="timeline-degree">{education.degree}</Typography>
                                        <Typography variant='body2' className="timeline-description">{education.description}</Typography>

                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Resume
