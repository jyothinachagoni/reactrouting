import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const classes = [
  { id: "year1", className: "Year 1" },
  { id: "year2", className: "Year 2" },  
];

function Classes() {
    const { classId } = useParams();
    console.log(classId)
  return (
  <div>
     <h2>Classes</h2> 
     <p> Class: {classId}</p>
   
      <ul>
        {classes.map((c) => (
          <li key={c.id}>
            {/* Make sure to include the `classId` in the URL */}
            <Link to={`/about/classes/`}>{c.className}</Link>
            
          </li> 
          
        ))}
      </ul>

      <Outlet /> 
  </div>
 );
}

export default Classes;
