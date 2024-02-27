import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const { title, description, code } = EXAMPLES[selectedTopic];
  function handleSelect(newtopic) {
    setSelectedTopic(newtopic);
  }
  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </Tabs>
    </Section>
  );
}
