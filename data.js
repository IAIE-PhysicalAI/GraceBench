window.GRACEBENCH = {
  "results": {
    "detailed": [
      {
        "model": "GUI-Owl-1.5-8B-Instruct",
        "scores": [
          0.1657,
          0.4403,
          0.3306,
          0.5559,
          0.6603,
          0.8212,
          1.6877
        ]
      },
      {
        "model": "UI-TARS-1.5-7B",
        "scores": [
          0.1006,
          0.2956,
          0.5149,
          0.5133,
          0.6017,
          0.7888,
          1.9501
        ]
      },
      {
        "model": "DeepSeek-V4.1-Flash",
        "scores": [
          0.5148,
          0.6099,
          0.1348,
          0.5934,
          0.5602,
          0.6987,
          1.8716
        ]
      },
      {
        "model": "GLM-5.3-Flash",
        "scores": [
          0.5976,
          0.7304,
          0.0743,
          0.447,
          0.5605,
          0.6857,
          1.4583
        ]
      },
      {
        "model": "Qwen3.8-Flash",
        "scores": [
          0.3254,
          0.4474,
          0.1591,
          0.6606,
          0.5834,
          0.7819,
          1.7755
        ]
      },
      {
        "model": "Qwen3.8-Max",
        "scores": [
          0.2722,
          0.4389,
          0.2111,
          0.6945,
          0.6017,
          0.7979,
          1.84
        ]
      },
      {
        "model": "Qwen3.8-27B",
        "scores": [
          0.2367,
          0.4044,
          0.2286,
          0.7412,
          0.5703,
          0.6976,
          1.578
        ]
      },
      {
        "model": "GPT-5.6 Sol",
        "scores": [
          0.6391,
          0.7388,
          0.1223,
          0.387,
          0.4454,
          0.5645,
          1.7143
        ]
      },
      {
        "model": "GPT-5.5",
        "scores": [
          0.5207,
          0.6151,
          0.1855,
          0.4502,
          0.5061,
          0.5928,
          1.4141
        ]
      },
      {
        "model": "Gemini 3.5 Flash",
        "scores": [
          0.3373,
          0.5428,
          0.193,
          0.5278,
          0.6988,
          0.8106,
          1.3689
        ]
      },
      {
        "model": "Gemini 3.1 Flash Lite",
        "scores": [
          0.071,
          0.1799,
          0.3961,
          0.7277,
          0.5238,
          0.7269,
          2.2597
        ]
      }
    ],
    "concise": [
      {
        "model": "GUI-Owl-1.5-8B-Instruct",
        "scores": [
          0.2367,
          0.4393,
          0.3807,
          0.5041,
          0.644,
          0.8296,
          1.9366
        ]
      },
      {
        "model": "UI-TARS-1.5-7B",
        "scores": [
          0.1538,
          0.3643,
          0.5088,
          0.4572,
          0.6013,
          0.8,
          1.974
        ]
      },
      {
        "model": "DeepSeek-V4.1-Flash",
        "scores": [
          0.4142,
          0.5163,
          0.2128,
          0.6107,
          0.602,
          0.8201,
          1.9388
        ]
      },
      {
        "model": "GLM-5.3-Flash",
        "scores": [
          0.6272,
          0.6676,
          0.1303,
          0.4289,
          0.556,
          0.707,
          1.7027
        ]
      },
      {
        "model": "Qwen3.8-Flash",
        "scores": [
          0.3787,
          0.5436,
          0.2142,
          0.5508,
          0.7193,
          0.8581,
          1.5269
        ]
      },
      {
        "model": "Qwen3.8-Max",
        "scores": [
          0.3077,
          0.4035,
          0.2154,
          0.7103,
          0.6867,
          0.8087,
          1.4523
        ]
      },
      {
        "model": "Qwen3.8-27B",
        "scores": [
          0.1893,
          0.336,
          0.2907,
          0.7532,
          0.541,
          0.6835,
          1.6158
        ]
      },
      {
        "model": "GPT-5.6 Sol",
        "scores": [
          0.6391,
          0.6261,
          0.1856,
          0.4746,
          0.4525,
          0.5806,
          1.8111
        ]
      },
      {
        "model": "GPT-5.5",
        "scores": [
          0.497,
          0.5224,
          0.2753,
          0.5154,
          0.4881,
          0.5971,
          1.8374
        ]
      },
      {
        "model": "Gemini 3.5 Flash",
        "scores": [
          0.3077,
          0.503,
          0.2462,
          0.5201,
          0.6654,
          0.8035,
          1.5971
        ]
      },
      {
        "model": "Gemini 3.1 Flash Lite",
        "scores": [
          0.1243,
          0.1902,
          0.465,
          0.719,
          0.4565,
          0.615,
          2.2734
        ]
      }
    ]
  },
  "abstract": "As GUI agents are increasingly deployed for mobile task automation, their reliability depends not only on final task outcomes, but also on whether they reach these outcomes through stable interaction trajectories. Whether in daily automation scenarios or testing workflows, unnecessary actions, detours, and execution errors can add noise to collected data, introduce irreversible side effects, or undermine trust, even when the agent eventually completes the task. It is therefore important to systematically diagnose the execution stability, including whether an agent deviates from a feasible path, enters a loop, becomes stagnant, or recovers from unstable actions. Existing benchmarks, however, primarily assess final task success or a small set of intermediate milestones, leaving step-level execution behavior unclear. To bridge this gap, we introduce GraceBench, an online evaluation framework that represents the reachable interaction space of mobile applications as UI Transition Graphs (UTGs), providing a structural reference for step-level execution diagnosis. To support reliable alignment between dynamic UI observations and graph states, GraceBench uses video-grounded trajectory evaluation over this graph-aligned representation, assessing process stability beyond final success by measuring metrics such as deviation rate, loop burden rate, and recovery ability. GraceBench contains 169 tasks spanning 10 applications and constructs 10 UTGs with 2,909 canonical GUI states and 3,116 observed transitions. Across 3,718 trajectories, GraceBench shows that outcome scores hide execution instability: GPT-5.6 Sol achieves the highest success rate (SR) but the lowest recovery ability, 51.24% of successful runs still contain a deviation or loop, and trajectories with the same success rate (SR) and completion rate (CR) can differ substantially in recovery behavior. Code will be made publicly available."
};
