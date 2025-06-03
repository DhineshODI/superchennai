import { Link , useNavigate} from "react-router-dom";
import "../assets/Css/TechEdu.css";
export default function TechEdu() {

    const navigate = useNavigate();
  return (
    <>
      <div className="techEduMainRow">
        <div className="techEduImage1 cursor-pointer" 
         onClick={() => navigate("/employmentbusinesspermits")}
        >
          <img src="./images/HomePage-Images/Tech.png" alt="" />
          <div className="techEdu1Content1">
            <h4>Chennai</h4>
            <p>
              A robust startup ecosystem, international tech players, and an
              innovation hotspot.
            </p>
          </div>
        </div>

        <div className="techEduImage2 cursor-pointer" 
         onClick={() => navigate("/educationinstitutions")}
        >
          <img src="./images/HomePage-Images/edu.png" alt="" />
          <div className="techEdu1Content2">
            <h4>Eductaion Chennai</h4>
            <p>
              A tradition of academic achievement and prestigious institutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
