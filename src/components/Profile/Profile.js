import { Typography } from '@material-ui/core'
import React, { useContext } from 'react';
import displayImage from '../../assets/images/displayImage.jpg';
import CustomTimeline, { CustomTimelineSeperator } from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import { ToggleContext } from '../../context/ToggleContext';
//import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import resume from './Houssem_Marzougui_Resume_2024.pdf';

//styles
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => {
    const { toggle } = useContext(ToggleContext);

    //const modeBg = !toggle ? { background: '#1d1d01' } : { background: 'white' };
    const modeColor = !toggle ? { color: 'white' } : { color: 'black' };

    return (
        <TimelineItem>
            <CustomTimelineSeperator />
            <TimelineContent className="timeline-content">
                {link ? <Typography className="timelineItem-text"><span style={modeColor}>{title}:</span> <a href={link} target='_blank' rel="noreferrer">{text}</a>
                </Typography> : <Typography className="timelineItem-text"><span style={modeColor}>{title}:</span> {text}</Typography>}
            </TimelineContent>
        </TimelineItem>
    )

}

const Profile = () => {
    const { toggle } = useContext(ToggleContext);

    const modeBg = !toggle ? { background: '#1d1d01' } : { background: 'white' };
    const modeColor = !toggle ? { color: 'white' } : { color: 'black' };

    return (
        <div className="profile container-shadow" style={modeBg}>
            <div className="profile-name">
                <Typography className="name" style={modeColor}>{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile-image">
                <img src={displayImage} alt="" />
            </figure>

            <div className="profile-info">
                <CustomTimeline icon={<AccountBoxIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='Email' text={resumeData.email_1} />
                    <CustomTimelineItem title='Email' text={resumeData.email_2} />
                    <CustomTimelineItem title='Phone' text={resumeData.phone} />
                    {/* {Object.keys(resumeData.socials).map(key => {
                        return <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    })} */}
                </CustomTimeline>
                <br />
                <div className="btn-container">
                    <CustomButton link={resume} text={'Resume'} icon={<CloudDownloadIcon target='_blank' rel="noreferrer" />} />
                </div>
            </div>
        </div>
    )
}

export default Profile;
