import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectView from "./components/ProjectView";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

  const handleAddTask = (text) => {
    setProjectState((prevProjects) => ({
      ...prevProjects,
      tasks: [
        ...prevProjects.tasks,
        {
          text: text,
          projectId: prevProjects.selectedProjectId,
          id: Math.random(),
        },
      ],
    }));
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
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
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  const tasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );
  let content = (
    <ProjectView
      project={selectedProject}
      onDeleteProject={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={tasks}
    />
  );

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
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
