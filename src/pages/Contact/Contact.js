import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomButton from '../../components/Button/Button';

//Styles
import './Contact.css';

export const Contact = () => {
    return (
        <Grid container spacing={6} className="section pb-45 pt-45">
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className="section-title bottom-40">
                        <span></span>
                        <h5 className="section-title-text">Contact Form</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            {/* <form className="" noValidate autoComplete="off"> */}
                            <TextField fullWidth name='name' label="Name" />

                            {/* </form> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth name='email' label="E-mail" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='message' label="Message" multiline rows={5} />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomButton text={"Submit"} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Grid container>
                    <Grid item className="section-title bottom-40">
                        <span></span>
                        <h5 className="section-title-text">Contact Information</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className="contactInfo-item">
                                    <span>Address: </span>{resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo-item">
                                    <span>Phone: </span>{resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo-item">
                                    <span>E-mail: </span>{resumeData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo-item">
                                    <span>Skype: </span>{resumeData.skype}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="contactInfo-socialsContainer">
                        {Object.keys(resumeData.socials).map(key => (
                            <Grid item className="contactInfo-social">
                                <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                            </Grid >
                        ))}
                    </Grid >
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Contact;