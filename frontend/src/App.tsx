import { useState } from 'react'
import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoPatientSelected from './components/NoPatientSelected'

function App() {

  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: string | null | undefined,
    projects: any[]
  }>({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData: any) {
    setProjectsState(prevState => {

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoPatientSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSidebar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  )
}

export default App
