import React from 'react';
import { Link } from 'react-router-dom';
import SuveryLink from './surveys/surveyList';

const Dashboard = () => {
    return(
        <div>
            <SuveryLink />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};


export default Dashboard