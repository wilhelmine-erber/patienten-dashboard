import { useState } from 'react'
import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoPatientSelected from './components/NoPatientSelected'
import type { ProjectsState } from './types'
import SelectedProject from './components/SelectedProject'

function App() {

  const [projectsState, setProjectsState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectPatient(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Handler to start adding a new project
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Handler to cancel a new project
  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }


  // Handler to add a new project
  function handleAddProject(projectData: { name: string; age: string; health: string }) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  // Determine the content to display based on the selected project state
  // If no project is selected, show the NewProject component
  // If a project is selected, show the NoPatientSelected component

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} />;


  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoPatientSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectPatient}
        />
        {content}
      </main>
    </>
  )
}

export default App
