import React from "react";

const LandingPageText = () => {

    return (
        <div>
            <h1>Welcome to Yesql!</h1>
            <h3>Yesql is a SQL query optimizer that helps you visualize your database</h3>
            <section>
                <div className="step-1"><span>1.</span> Make sure your local database is running</div>
                <div className="step-2"><span>2.</span> Enter your databse credentials</div>
                <div className="step-3"><span>3.</span> Click on the table and columns you need</div>
                <div className="step-4"><span>4.</span> Copy your SQL query and use it in your own codebase</div>
            </section>
        </div>
    )
}
export default LandingPageText;