import React from "react";
import PropTypes from 'prop-types';
import {Project} from "./Project.jsx";
import {Link} from "react-router-dom";

function formatDescription(description) {
    return description.substring(0, 60) + '...';
}


function ProjectCard(props) {
    const {project, onEdit} = props;
    const handleClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited);
    }
    return <div className="card">
        <img src={props.project.imageUrl} alt={props.project.name}/>
        <section className="section dark">
            <Link to={'/projects/' + project.id}>
                <h5 className="strong">
                    <strong>{props.project.name}</strong>
                </h5>
                <p>{formatDescription(props.project.description)}</p>
                <p>Budget : {props.project.budget.toLocaleString()}</p>
            </Link>
            <button className=" bordered" onClick={() => {
                handleClick(project);
            }}>
                <span className="icon-edit "></span>
                Edit
            </button>
        </section>
    </div>;
}

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired,
    onEdit: PropTypes.func.isRequired
};

export default ProjectCard;
