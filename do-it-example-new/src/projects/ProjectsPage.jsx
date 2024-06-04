import {MOCK_PROJECTS} from './MockProjects.jsx';
import ProjectList from "./ProjectList.jsx";

function ProjectsPage() {
    const saveProject = (project) => {
        console.log('Saving project: ', project);
    };
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projectList={MOCK_PROJECTS} onSave={saveProject}/>
        </>
    )
}

export default ProjectsPage;