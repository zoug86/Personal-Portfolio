import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeperator } from '../../components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { School, Work } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';

// styles
import './Resume.css';

const Resume = () => {
    return (
        <Grid container className="section pb-45  pt-45">
            <Grid item className="section-title bottom-40">
                <span></span>
                <h5 className="section-title-text">Resume</h5>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="resume-timeline">
                    {/* Work History */}
                    <Grid item sm={12} md={6}>

                        <CustomTimeline title={"Experience"} icon={<Work />}>
                            {resumeData.experiences.map(experience => (
                                <TimelineItem>
                                    <CustomTimelineSeperator />
                                    <TimelineContent className="timeline-content">
                                        <Typography className="timeline-title">{experience.title}</Typography>
                                        <Typography variant='caption' className="timeline-date">{experience.date}</Typography>
                                        <Typography variant='body2' className="timeline-description">{experience.description}</Typography>

                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title={"Education"} icon={<School />}>
                            {resumeData.educations.map(education => (
                                <TimelineItem>
                                    <CustomTimelineSeperator />
                                    <TimelineContent className="timeline-content">
                                        <Typography className="timeline-title">{education.title}</Typography>
                                        <Typography variant='caption' className="timeline-date">{education.date}</Typography>
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
