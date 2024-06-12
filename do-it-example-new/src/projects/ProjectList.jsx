import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm.jsx";

ProjectCard.propTypes = {project: PropTypes.any};

function ProjectList({projectList, onSave}) {
    // return <pre>{JSON.stringify(projectList, null, 2)}</pre>;
    const [projectBeingEdited, setProjectBeingEdited] = React.useState({});
    const handleEdit = (project) => {
        console.log(project);
        setProjectBeingEdited(project);
    }
    const cancelEditing = () => {
        setProjectBeingEdited({});
    }

    return (
        <div className="row">
            {projectList.map((project) => (
                <div className="cols-sm" key={project.id}>
                    {project === projectBeingEdited
                        ? <ProjectForm onCancel={cancelEditing} onSave={onSave} project={project}/>
                        : <ProjectCard project={project} onEdit={handleEdit}/>}
                </div>
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    projectList: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired
}

export default ProjectList;