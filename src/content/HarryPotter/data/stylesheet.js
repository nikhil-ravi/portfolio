// pastel dark color palette
const colors = [
  "#a4b6dd",
  "#d09292",
  "#c094cc",
  "#a2d0c0",
  "#c37892",
  "#ff686b",
  "#60d394",
  "#ffe45e",
  "#7161ef",
  "#ff69eb",
  "#d0d0d0",
];

const stylesheet = [
  {
    selector: "node",
    style: {
      width: "mapData(eigen_centrality, 0, 0.1502110339229677, 10, 200)",
      height: "mapData(eigen_centrality, 0, 0.1502110339229677, 10, 200)",
      shape: "ellipse",
    },
  },
  {
    selector: "node",
    style: {
      content: "data(name)",
      "font-size": "mapData(pagerank, 0, 0.2001249475761213, 10, 100)",
      "text-valign": "center",
      "text-halign": "center",
      "font-style": "italic",
      "font-family": "Harry P",
      color: "#fff",
    },
  },
  {
    selector: "edge",
    style: {
      width: "mapData(weight, 1, 10448, 0.1, 20)",
      "line-color": "#555",
      opacity: "0.55",
      "curve-style": "bezier",
    },
  },
  ...Array(11)
    .fill()
    .map((_, i) => ({
      selector: `node[louvain = ${i}]`,
      style: {
        "background-color": `${colors[i]}`,
      },
    })),
];

export default stylesheet;
