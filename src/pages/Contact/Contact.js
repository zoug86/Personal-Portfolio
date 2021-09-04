import React, { useState, useContext } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomButton from '../../components/Button/Button';
import emailjs from 'emailjs-com';
import GoogleMapReact from 'google-map-react';
import { ToastContainer, toast } from 'react-toastify';
import { ToggleContext } from '../../context/ToggleContext';

import 'react-toastify/dist/ReactToastify.css';


//Styles
import './Contact.css';

export const Contact = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const center = { lat: 48.463253, lng: -123.321681 };
    const zoom = 14;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f6wrvae', 'template_1oul859', e.target, 'user_loX0utW4veeFh7a3V2iBK')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
        setInput1('');
        setInput2('');
        setInput3('');
        toast.success('Thank you! Message Sent 😄')
    }
    const handleChange1 = (e) => {
        console.log(e.target.value);
        setInput1(e.target.value);
    }
    const handleChange2 = (e) => {
        console.log(e.target.value);
        setInput2(e.target.value);
    }
    const handleChange3 = (e) => {
        console.log(e.target.value);
        setInput3(e.target.value);
    }

    const { toggle } = useContext(ToggleContext);
    const modeBg = !toggle ? { background: '#1d1d01' } : { background: 'white' };
    const modeColor = !toggle ? { color: 'white' } : { color: 'black' };

    return (
        <div className="contact-container" style={modeBg}>
            <Grid container spacing={6} className="section pb-45 pt-45">
                <Grid className="left-side" item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className="section-title bottom-40">
                            <span></span>
                            <h5 className="section-title-text" style={modeColor}>Contact Form</h5>
                        </Grid>
                    </Grid>
                    <form className="form" onSubmit={handleFormSubmit}>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    {/* <input type="text" name="name" /> */}
                                    <TextField value={input1} fullWidth name='name' label="Name" onChange={handleChange1} required variant="filled" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* <input type="email" name="email" /> */}
                                    <TextField value={input2} fullWidth name='user_email' label="E-mail" onChange={handleChange2} required variant="filled" />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <textarea name="message" /> */}
                                    <TextField value={input3} fullWidth name='message' label="Message" multiline rows={5} onChange={handleChange3} required variant="filled" />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <input type="submit" value="send" /> */}
                                    <CustomButton text={"Send"} />
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section-title bottom-40">
                            <span></span>
                            <h5 className="section-title-text" style={modeColor}>Contact Information</h5>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="contactInfo-item">
                                        <span style={modeColor}>Address: </span>{resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactInfo-item">
                                        <span style={modeColor}>Phone: </span>{resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactInfo-item">
                                        <span style={modeColor}>E-mail: </span>{resumeData.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactInfo-item">
                                        <span style={modeColor}>Skype: </span>{resumeData.skype}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="contactInfo-socialsContainer">
                            {Object.keys(resumeData.socials).map((key, i) => (
                                <Grid key={i} item className="contactInfo-social">
                                    <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                                        <span style={modeColor}>{resumeData.socials[key].icon}</span>
                                    </a>
                                </Grid >
                            ))}
                        </Grid >
                    </Grid>
                </Grid>
            </Grid >
            {/* Google Map */}
            <Grid container spacing={0} className="section pb-45 pt-45">
                <Grid container>
                    <Grid item className="section-title bottom-40">
                        <span></span>
                        <h5 className="section-title-text" style={modeColor}>Contact Map</h5>
                    </Grid>
                </Grid>
                <Grid container className="bottom-40">
                    <div style={{ height: '45vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` }}
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                        </GoogleMapReact>
                    </div>
                </Grid >
            </Grid >
        </div >

    )
}

export default Contact;