import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: null,
    }));
  };

  const handleSaveAddProject = (projectData) => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: undefined,
      projects: [...prevProjects.projects, projectData],
    }));
  };

  const handleSelectedProject = (selectedProject) => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: selectedProject,
    }));
  };

  const handleCancel = () => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: undefined,
    }));
  };

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAddProject={handleSaveAddProject} onCancel={handleCancel} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartProject={handleStartAddProject}
        onProjectSelected={handleSelectedProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
