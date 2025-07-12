import React from 'react';

const infoSectionStyle = {
    padding: '24px 24px 0px 24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    marginBottom: '20px',
    textAlign: 'justify'
};

const titleSmRedStyle = {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '4px'
};

const titleBlueStyle = {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '10px'
};

const descriptionStyle = {
    fontSize: '14px',
    color: '#333',
    // lineHeight: '1.7',
    display: 'block'
};

const InfoSection = ({ title, subtitle, description }) => (
    <div style={infoSectionStyle}>
        <div style={titleSmRedStyle}>{title}</div>
        <div style={titleBlueStyle}>{subtitle}</div>
        <span style={descriptionStyle}>{description}</span>
    </div>
);

export default InfoSection;