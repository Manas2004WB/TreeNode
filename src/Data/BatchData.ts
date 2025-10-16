import { type TreeNode } from "../Components/Types";

export const sampleData: TreeNode[] = [
  {
    id: "batch-a",
    name: "Batch A",
    type: "Batch",
    createdAt: "created today",
    children: [
              {
            id: "premix-a1",
            name: "Premix",
            type: "Field",
            children: [
                    {
                      id: "bin-a1",
                      name: "Bin A1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                        { id: "shot-2", name: "Shot 2", L: 23, a: 1.8, b: -30.3 },
                        { id: "shot-3", name: "Shot 3", L: 93, a: 7.8, b: -56.2 },
                      ],
                    },
                    {
                      id: "bin-a2",
                      name: "Bin A2",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                      ],
                    },
            ],
          },
          {
            id: "extruder-a1",
            name: "Extruder",
            type: "Field",
            children: [
                    {
                      id: "bin-b1",
                      name: "Bin B1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },                       
                      ],
                    },
                    {
                      id: "bin-b2",
                      name: "Bin B2",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                      ],
                    },
            ],
          },
          {
            id: "chips-a1",
            name: "Chips",
            type: "Field",
            children: [
                    {
                      id: "bin-c1",
                      name: "Bin C1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },                
                      ],
                    },
            ],
          },
          {
            id: "powder-a1",
            name: "Powder",
            type: "Field",
            children: [
                    {
                      id: "bin-c2",
                      name: "Bin C2",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                      ],
                    },
            ],
          },
          {
            id: "MEpanel-a1",
            name: "MEpanel (Manual Entry)",
            type: "Field",
            children: [
                    {
                      id: "bin-d1",
                      name: "Bin D1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                      ],
                    },
            ],
          },
          {
            id: "NIXPanel-a1",
            name: "NIXPanel (Manual Entry)",
            type: "Field",
            children: [
                    {
                      id: "bin-e1",
                      name: "Bin E1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                      ],
                    },
            ],
          },
          {
            id: "SpectrophotometerPanel-a1",
            name: "Spectrophotometer Panel (Manual Entry)",
            type: "Field",
            children: [
                    {
                      id: "bin-f1",
                      name: "Bin F1",
                      type: "Bin",
                      children: [
                        
                        { id: "shot-0", name: "Shot 0", L: 87, a: 30, b: 8 },
                        { id: "shot-1", name: "Shot 1", L: 78, a: 1.4, b: -0.9 },
                      ],
                    },
            ],
          },

      // ... more bins
    ],
  },
];
