import { type TreeNode } from "../Components/Types";

export const sampleData: TreeNode[] = [
  {
    id: "batch-a",
    name: "Batch A",
    type: "Batch",
    counts: "Bins: 2 • Boxes: 3 • Shots: 6",
    status: "Active",
    createdAt: "created today",
    children: [
      {
        id: "bin-a1",
        name: "Bin A1",
        type: "Bin",
        counts: "Boxes: 2 • Shots: 4",
        status: "Queued",
        children: [
          {
            id: "box-a11",
            name: "Box A1-1",
            type: "Box",
            counts: "Shots: 2",
            status: "In Progress",
            children: [
              {
                id: "shot-a111",
                name: "Shot A1-1-1",
                type: "Shot",
                counts: "Frames: 120",
                status: "Done",
              },
              {
                id: "shot-a112",
                name: "Shot A1-1-2",
                type: "Shot",
                counts: "Frames: 150",
                status: "Queued",
              },
            ],
          },
        ],
      },
      {
        id: "bin-b1",
        name: "Bin B1",
        type: "Bin",
        counts: "Boxes: 2 • Shots: 4",
        status: "Queued",
        children: [
          {
            id: "box-b11",
            name: "Box B1-1",
            type: "Box",
            counts: "Shots: 2",
            status: "In Progress",
            children: [
              {
                id: "shot-b111",
                name: "Shot B1-1-1",
                type: "Shot",
                counts: "Frames: 120",
                status: "Done",
              },
              {
                id: "shot-b112",
                name: "Shot B1-1-2",
                type: "Shot",
                counts: "Frames: 150",
                status: "Queued",
              },
            ],
          },
        ],
      },
    ],
  },
];
