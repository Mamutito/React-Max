import Button from "./Button";

function ProjectsSidebar({ onProjectSelected }) {
  return (
    <aside className="px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <Button onClick={onProjectSelected}>+ Add Project</Button>
      <ul></ul>
    </aside>
  );
}

export default ProjectsSidebar;
