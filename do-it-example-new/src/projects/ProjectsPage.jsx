import ProjectList from "./ProjectList.jsx";
import {useState, useEffect} from "react";
import {projectAPI} from "./ProjectAPI.jsx";

function ProjectsPage() {
    // const [projects, setProjects] = useState(MOCK_PROJECTS);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    // Approach 1: using promise then
//  useEffect(() => {
//    setLoading(true);
//    projectAPI
//      .get(1)
//      .then((data) => {
//        setError(null);
//        setLoading(false);
//        setProjects(data);
//      })
//      .catch((e) => {
//        setLoading(false);
//        setError(e.message);
//      });
//  }, []);

// Approach 2: using async/await
    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(1);
                setError(null);
                setProjects(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        loadProjects().then(r => {
            console.log(r);
        });
    }, []);

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
            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            <ProjectList projectList={projects} onSave={saveProject}/>
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
        </>
    )
}

export default ProjectsPage;