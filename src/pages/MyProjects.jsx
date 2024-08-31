import './MyProjects.css';
import resturantAppImg from '../assets/resturantApp_Image/resturantAppImg.png';
import createProjectImg from '../assets/createProjectApp_Image/createProject.png'
import { useState } from 'react';
import CreateProjectApp from '../components/CreateProjectApp';
import ResturantApp from '../components/ResturantApp';

export default function MyProjects(){
    
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    
    const projects = [
        {id: 1, title: 'Resturant App', image: resturantAppImg, component: ResturantApp},
        {id: 2, title: 'Create Project App', image: createProjectImg, component: CreateProjectApp},
    ]
    
    function handleClickProject(id){
      setSelectedProjectId(id);
    }

    function handleCloseProject(id){
        setSelectedProjectId(id);
    }

    const selectedProject = projects.find(project => project.id === selectedProjectId);

    if (selectedProject) {
        const ProjectComponent = selectedProject.component;
        return <ProjectComponent onClose={handleCloseProject} />;
    }

    return(
        <>
        <h1>Check my Work</h1>

        <div className='projects'>
            <ul>
                {projects.map(project =>(
                    <li key={project.id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            onClick={() => handleClickProject(project.id)}
                        />
                        <p>{project.title}</p>
                    </li>
                   
                ))}
                
            </ul>
        </div>
            
        </>
        
    );
}