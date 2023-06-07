import React, { useEffect, useRef } from "react";
import { DataSet, Network } from "vis";

const nodesData = [
  { id: 1, label: "Node 1" },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
];
const edgesData = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
];

type Props = {
  setData: (txt: string) => void
}
const NetworkVisualization:React.FC<Props> = ({setData}) => {
  const networkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = new DataSet(nodesData);
    const edges = new DataSet(edgesData);

    const container = networkRef.current;

    if (container) {
      const data = {
        nodes: nodes,
        edges: edges,
      };

      const options = {};

      const network = new Network(container, data, options);

      network.on("click", (params) => {
        const clickedNode = nodes.get(params.nodes[0]);
        if (clickedNode) {
          // ${JSON.stringify(clickedNode)}
          // console.log(params.nodes[0]);
          setData(JSON.stringify(clickedNode))
        }
      });

      return () => {
        network.destroy();
      };
    }
  }, []);

  return <div ref={networkRef} style={{ height: "500px" }}></div>;
};

export default NetworkVisualization;
