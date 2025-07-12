import React from 'react';

const infoSectionStyle = {
    padding: '24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    marginBottom: '20px',
    textAlign: 'justify'
};

const titleSmRedStyle = {
    color: '#d32f2f',
    fontWeight: 'bold',
    marginBottom: '8px'
};

const titleBlueStyle = {
    color: '#1976d2',
    fontWeight: 'bold',
    marginBottom: '12px'
};

const descriptionStyle = {
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.7',
    display: 'block'
};

const InfoSection = ({ title, subtitle, description }) => (
    <div style={infoSectionStyle}>
        <h5 style={titleSmRedStyle}>{title}</h5>
        <h5 style={titleBlueStyle}>{subtitle}</h5>
        <span style={descriptionStyle}>{description}</span>
    </div>
);

export default InfoSection;