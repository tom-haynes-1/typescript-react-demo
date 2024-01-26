import React from "react";
import "../../scss/loading-spinner.scss";

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-container">
            <p className="loading-spinner-text">
                Loading...
            </p>
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingSpinner;