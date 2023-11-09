import CytoscapeComponent from "react-cytoscapejs";
import data from "@/content/HarryPotter/data/data";
import stylesheet from "@/content/HarryPotter/data/stylesheet";

export default function Graph() {
  const elements = CytoscapeComponent.normalizeElements(data.elements);
  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: "preset" }}
      style={{
        height: "720px",
      }}
      stylesheet={stylesheet}
    />
  );
}
