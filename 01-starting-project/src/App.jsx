import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const { title, description, code } = EXAMPLES[selectedTopic];
  function handleSelect(newtopic) {
    setSelectedTopic(newtopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcepts {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
