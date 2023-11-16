import CytoscapeComponent from "react-cytoscapejs";
import data from "@/content/HarryPotter/data/data";
import stylesheet from "@/content/HarryPotter/data/stylesheet";
import { useDarkMode } from "@/context/DarkModeProvider";

export default function Graph() {
  const { isDarkMode } = useDarkMode();
  const elements = CytoscapeComponent.normalizeElements(data.elements);
  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: "preset" }}
      style={{
        height: "720px",
      }}
      stylesheet={[
        ...stylesheet,
        {
          selector: "node",
          style: {
            content: "data(name)",
            "font-size": "mapData(pagerank, 0, 0.2001249475761213, 10, 100)",
            "text-valign": "center",
            "text-halign": "center",
            "font-style": "italic",
            "font-family": "Harry P",
            color: isDarkMode ? "#fff" : "#000",
          },
        },
      ]}
    />
  );
}
