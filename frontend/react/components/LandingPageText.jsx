import React from "react";

const LandingPageText = () => {

    return (
        <section>
            <div className="step-1"><span>1.</span> Make sure your local database is running</div>
            <div className="step-2"><span>2.</span> Enter your databse credentials</div>
            <div className="step-3"><span>3.</span> Click on the table and columns you need</div>
            <div className="step-4"><span>4.</span> Copy your SQL query and use it in your own codebase</div>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M 20 10 Q 20 50 20 90" fill="none" stroke="#0b002d" stroke-width="0.5" />
            </svg>
        </section>
    )
}
export default LandingPageText;