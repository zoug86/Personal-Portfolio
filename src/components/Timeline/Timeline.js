import React from 'react';
import {Typography} from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
//import WorkIcon from '@material-ui/icons/Work';

//styles
import './Timeline.css';

const CustomTimeline = ({title, children, icon}) => {
    return (
        <Timeline className="timeline">
     {/* Item Header */}
      <TimelineItem className="timeline-firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline-dot-header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" className="timeline-header">
                {title}
            </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Remaining Items */}
      {children}  
    </Timeline>
    )
}

export const CustomTimelineSeperator = () => (
    <TimelineSeparator className="seperator-padding">
        <TimelineDot variant={'outlined'} className="timeline-dot"/>
        <TimelineConnector />
   </TimelineSeparator>
)

export default CustomTimeline;