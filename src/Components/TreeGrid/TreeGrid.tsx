import React, { useState } from "react";
import "./TreeGrid.css";

export interface TreeNode {
  id: string;
  name: string;
  type: "Batch" | "Bin" | "Box" | "Shot";
  counts?: string;
  status?: string;
  createdAt?: string;
  children?: TreeNode[];
}

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

  const renderRows = (nodes: TreeNode[], level = 0, parentId?: string) => {
    return nodes.map((node) => {
      const isExpanded = expanded.has(node.id);
      const hasChildren = !!node.children?.length;

      return (
        <React.Fragment key={node.id}>
          <tr role="row">
            <td role="gridcell">
              <div className={`tree-cell indent-${level}`}>
                {hasChildren && (
                  <button
                    className="toggle"
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpand(node.id)}
                    title={`Toggle ${node.name}`}
                  />
                )}
                {!hasChildren && <button className="toggle" style={{ visibility: "hidden" }} />}
                <strong>{node.name}</strong>
                {node.createdAt && <span className="meta"> • {node.createdAt}</span>}
              </div>
            </td>
            <td role="gridcell">{node.type}</td>
            <td role="gridcell">{node.counts}</td>
            <td role="gridcell">
              <span className="status">{node.status}</span>
            </td>
          </tr>

          {hasChildren && isExpanded && renderRows(node.children!, level + 1, node.id)}
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
