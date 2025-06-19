import React from "react";
import './Style.css';


function Exprience(){
    return(
        <div className="container">
      <h3 className="section-title">WORK EXPERIENCE</h3>

      <div className="experience-block">
        <h4 className="company">OLA Electric Technology <span className="duration">Mar 2023 – Mar 2025</span></h4>
        <p className="position"><em>Executive For Outbound</em></p>
        <ul className="experience-list">
          <li>Handled dispatch of scooters and last mile tracking</li>
          <li>Used SAP & Salesforce for stock monitoring</li>
          <li>Generated E-way bills, PDI checks, asset management</li>
          <li>Maintained records in Google Sheets</li>
        </ul>
      </div>

      <div className="experience-block">
        <h4 className="company">Nokia Network and Solutions <span className="duration">Jul 2019 – Apr 2020</span></h4>
        <p className="position"><em>Supplier Quality - IGI</em></p>
        <ul className="experience-list">
          <li>Worked with SAP for GRN and stock clearance</li>
          <li>Monitored data for logistics and quality checks</li>
        </ul>
      </div>
    </div>
    );
}

export default Exprience;
