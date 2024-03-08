import React from "react";

const LandingPageText = () => {

    return (
        <div className="landing-page">
            <h1>Welcome to Yesql!</h1>
            <h3>Yesql is a SQL query optimizer that helps you visualize your database</h3>
            <ol>
                <li>Make sure your local database is running</li>
                <li>Enter your databse credentials</li>
                <li>Click on the table and columns you need</li>
                <li>Copy your SQL query and use it in your own codebase</li>
            </ol>
        </div>
    )
}
export default LandingPageText;