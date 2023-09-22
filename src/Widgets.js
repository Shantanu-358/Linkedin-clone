import React from 'react';
import './Widgets.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoOutlinedIcon />
            </div>

            {newsArticle("Chandrayan launched!", "1h ago")}
            {newsArticle("Smartwatch brands dial down prices", "2d ago")}
            {newsArticle("Chandrayan Evolving skillsets for CEOs", "10h ago")}
            {newsArticle("Indian startups continue layoffs", "7h ago")}
            {newsArticle("Banks record spending surge", "23h ago")}
        </div>
    );
}

export default Widgets