import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectView from "./components/ProjectView";

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

  const handleSelectedProject = (projectId) => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: projectId,
    }));
  };

  const handleCancel = () => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: undefined,
    }));
  };

  const handleDelete = (projectId) => {
    setProjectState((prevState) => ({
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
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
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  content = (
    <ProjectView project={selectedProject} onDeleteProject={handleDelete} />
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartProject={handleStartAddProject}
        onProjectSelected={handleSelectedProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
