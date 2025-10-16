import React, { useState } from "react";
import "./TreeGrid.css";
import { type TreeNode,type ShotNode } from "./Types";


interface TreeGridProps {
  data: TreeNode[];
}

const TreeGrid: React.FC<TreeGridProps> = ({ data }) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newSet = new Set(expanded);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpanded(newSet);
  };

  const renderRows = (nodes: TreeNode[] | ShotNode[], level = 0) => {
  return nodes.map((node) => {
    const isTreeNode = "type" in node; // distinguish TreeNode vs ShotNode
    const hasChildren = isTreeNode && !!node.children?.length;
    const isExpanded = isTreeNode && expanded.has(node.id);

    return (
      <React.Fragment key={node.id}>
        <tr>
          <td className={`tree-cell indent-${level}`}>
            {hasChildren && (
              <button
                className="toggle"
                aria-expanded={isExpanded}
                onClick={() => toggleExpand(node.id)}
              />
            )}
            {!hasChildren && <button className="toggle" style={{ visibility: "hidden" }} />}
            {node.name}
          </td>
          {isTreeNode ? (
            <>
              <td>{node.type}</td>
              <td>{node.counts || ""}</td>
              <td>{node.status || ""}</td>
            </>
          ) : (
            <>
              <td>L: {node.L}</td>
              <td>a: {node.a}</td>
              <td>b: {node.b}</td>
            </>
          )}
        </tr>

        {hasChildren && isExpanded && renderRows(node.children!, level + 1)}
      </React.Fragment>
    );
  });
};


  return (
    <div className="wrap">
      <div className="toolbar">
        <div className="chip">Batches</div>
        <div className="chip">Bins</div>
        <div className="chip">Boxes</div>
        <div className="chip">Shots</div>
      </div>

      <table role="treegrid" aria-label="Batches to shots">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Counts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
};

export default TreeGrid;
