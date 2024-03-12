import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddProject = () => {
    setProjectSelected((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: null,
    }));
  };
  const handleSaveAddProject = (projectData) => {
    setProjectSelected((prevProjects) => ({
      ...prevProjects,
      projects: [...prevProjects.projects, projectData],
    }));
  };
  let content;
  if (projectSelected.selectedProjectId === null) {
    content = <NewProject onAddProject={handleSaveAddProject} />;
  } else if (projectSelected.selectedProjectId === undefined) {
    content = <NoProjectSelected onProjectSelected={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onProjectSelected={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
