import {MOCK_PROJECTS} from './MockProjects.jsx';
import ProjectList from "./ProjectList.jsx";
import {useState} from "react";

function ProjectsPage() {
    const [projects, setProjects] = useState(MOCK_PROJECTS);
    const saveProject = (project) => {
        // console.log('Saving project: ', project);
        let updatedProjects = projects.map((p) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
    };
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projectList={projects} onSave={saveProject}/>
        </>
    )
}

export default ProjectsPage;