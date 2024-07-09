---
title: "HallusionBench: An Advanced Diagnostic Suite for Entangled Language Hallucination and Visual Illusion in Large Vision-Language Models"
collection: publications
permalink: /publications/HallusionBench_10_23_2023
excerpt: "We introduce HallusionBench a comprehensive benchmark designed for the evaluation of image-context reasoning. This benchmark presents significant challenges to advanced large visual-language models (LVLMs) such as GPT-4V(ision) Gemini Pro Vision Claude 3 and LLaVA-1.5 by emphasizing nuanced understanding and interpretation of visual data. The benchmark comprises 346 images paired with 1129 questions all meticulously crafted by human experts. We introduce a novel structure for these visual questions designed to establish control groups. This structure enables us to conduct a quantitative analysis of the models' response tendencies logical consistency and various failure modes. In our evaluation on HallusionBench we benchmarked 15 different models highlighting a 31.42% question-pair accuracy achieved by the state-of-the-art GPT-4V. Notably all other evaluated models achieve accuracy below 16%. Moreover our analysis not only highlights the observed failure modes including language hallucination and visual illusion but also deepens an under standing of these pitfalls. Our comprehensive case studies within HallusionBench shed light on the challenges of hallucination and illusion in LVLMs. Based on these insights we suggest potential pathways for their future improvement. The benchmark and codebase can be accessed at https://github.com/tianyilab/HallusionBench."
date: 2024-02-26
venue: 'The IEEE / CVF Computer Vision and Pattern Recognition Conference'
short: 'CVPR 2024'
paperurl: 'https://arxiv.org/abs/2310.14566'
teaser: '/images/HallusionBench.png'
authors: "Tianrui Guan*, Fuxiao Liu*, <b>Xiyang Wu</b>, Ruiqi Xian, Zongxia Li, Xiaoyu Liu, Xijun Wang, Lichang Chen, Furong Huang, Yaser Yacoob, Dinesh Manocha, Tianyi Zhou (* indicates equal contributions)"
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
code: "https://github.com/tianyi-lab/HallusionBench"
redirect_from: 
  - /hallusionbench
---

<p style="text-align:center;">
<img src="/images/HallusionBench.png" width="800">
</p>

## Abstract
<div style="text-align: justify"> We introduce HallusionBench a comprehensive benchmark designed for the evaluation of image-context reasoning. This benchmark presents significant challenges to advanced large visual-language models (LVLMs) such as GPT-4V(ision) Gemini Pro Vision Claude 3 and LLaVA-1.5 by emphasizing nuanced understanding and interpretation of visual data. The benchmark comprises 346 images paired with 1129 questions all meticulously crafted by human experts. We introduce a novel structure for these visual questions designed to establish control groups. This structure enables us to conduct a quantitative analysis of the models' response tendencies logical consistency and various failure modes. In our evaluation on HallusionBench we benchmarked 15 different models highlighting a 31.42% question-pair accuracy achieved by the state-of-the-art GPT-4V. Notably all other evaluated models achieve accuracy below 16%. Moreover our analysis not only highlights the observed failure modes including language hallucination and visual illusion but also deepens an under standing of these pitfalls. Our comprehensive case studies within HallusionBench shed light on the challenges of hallucination and illusion in LVLMs. Based on these insights we suggest potential pathways for their future improvement. The benchmark and codebase can be accessed at https://github.com/tianyilab/HallusionBench.
</div>
<br>


| Paper                                                     | Code                                                           | 
|-----------------------------------------------------------|----------------------------------------------------------------|
| [**HallusionBench**](https://arxiv.org/abs/2310.14566)    | [**GitHub Code**](https://github.com/tianyi-lab/HallusionBench/) |

<br>

Please cite our work if you found it useful,

```
@misc{guan2023hallusionbench,
      title={HallusionBench: An Advanced Diagnostic Suite for Entangled Language Hallucination & Visual Illusion in Large Vision-Language Models}, 
      author={Tianrui Guan and Fuxiao Liu and Xiyang Wu and Ruiqi Xian and Zongxia Li and Xiaoyu Liu and Xijun Wang and Lichang Chen and Furong Huang and Yaser Yacoob and Dinesh Manocha and Tianyi Zhou},
      year={2023},
      eprint={2310.14566},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}
```