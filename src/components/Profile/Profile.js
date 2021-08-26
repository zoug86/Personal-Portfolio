import { Typography } from '@material-ui/core'
import React from 'react';
import displayImage from '../../assets/images/displayImage.jpg';
import CustomTimeline, { CustomTimelineSeperator } from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import resume from './Houssem_Marzougui_2021_Resume.pdf';

//styles
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => {
    return (
        <TimelineItem>
            <CustomTimelineSeperator />
            <TimelineContent className="timeline-content">
                {link ? <Typography className="timelineItem-text"><span>{title}:</span> <a href={link} target='_blank' rel="noreferrer">{text}</a>
                </Typography> : <Typography className="timelineItem-text"><span>{title}:</span> {text}</Typography>}
            </TimelineContent>
        </TimelineItem>
    )

}

const Profile = () => {
    //console.log( displayImage); //

    return (
        <div className="profile container-shadow">
            <div className="profile-name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile-image">
                <img src={displayImage} alt="" />
            </figure>

            <div className="profile-info">
                <CustomTimeline icon={<AccountBoxIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='Email' text={resumeData.email} />
                    <CustomTimelineItem title='Phone' text={resumeData.phone} />
                    {/* {Object.keys(resumeData.socials).map(key => {
                        return <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    })} */}
                </CustomTimeline>
                <br />
                <div className="btn-container">
                    <CustomButton link={resume} text={'Resume'} icon={<CloudDownloadIcon />} />
                    <p><a href={resume} target='_blank' rel="noreferrer" className='btn-container-view'>-View-</a></p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
