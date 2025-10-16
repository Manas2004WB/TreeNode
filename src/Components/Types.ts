export type ShotNode = {
  id: string;
  name: string;
  L: number;
  a: number;
  b: number;
};

export type TreeNode = {
  id: string;
  name: string;
  type: string;
  counts?: string;
  status?: string;
  createdAt?: string;
  children?: TreeNode[] | ShotNode[];
};
