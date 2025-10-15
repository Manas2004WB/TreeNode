export interface TreeNode {
  id: string;
  name: string;
  type: "Batch" | "Bin" | "Box" | "Shot";
  counts?: string;
  status?: string;
  createdAt?: string;
  children?: TreeNode[];
}