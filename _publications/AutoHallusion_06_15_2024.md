---
title: "AUTOHALLUSION: Automatic Generation of Hallucination Benchmarks for Vision-Language Models"
collection: publications
permalink: /publications/AutoHallusion_06_15_2024
excerpt: "Large vision-language models (LVLMs) hallucinate: certain context cues in an image may trigger the language module's overconfident and incorrect reasoning on abnormal or hypothetical objects. Though a few benchmarks have been developed to investigate LVLM hallucinations, they mainly rely on hand-crafted corner cases whose fail patterns may hardly generalize, and finetuning on them could undermine their validity. These motivate us to develop the first automatic benchmark generation approach, AUTOHALLUSION, that harnesses a few principal strategies to create diverse hallucination examples. It probes the language modules in LVLMs for context cues and uses them to synthesize images by: (1) adding objects abnormal to the context cues; (2) for two co-occurring objects, keeping one and excluding the other; or (3) removing objects closely tied to the context cues. It then generates image-based questions whose ground-truth answers contradict the language module's prior. A model has to overcome contextual biases and distractions to reach correct answers, while incorrect or inconsistent answers indicate hallucinations. AUTOHALLUSION enables us to create new benchmarks at the minimum cost and thus overcomes the fragility of hand-crafted benchmarks. It also reveals common failure patterns and reasons, providing key insights to detect, avoid, or control hallucinations. Comprehensive evaluations of top-tier LVLMs, e.g., GPT-4V(ision), Gemini Pro Vision, Claude 3, and LLaVA-1.5, show a 97.7% and 98.7% success rate of hallucination induction on synthetic and real-world datasets of AUTOHALLUSION, paving the way for a long battle against hallucinations."
date: 2024-06-15
venue: 'arXiv:2406.10900'
short: 'Under Review'
paperurl: 'https://arxiv.org/abs/2406.10900'
teaser: '/images/AutoHallusion.png'
authors: "<b>Xiyang Wu*</b>, Tianrui Guan*, Dianqi Li, Shuaiyi Huang, Xiaoyu Liu, Xijun Wang, Ruiqi Xian, Abhinav Shrivastava, Furong Huang, Jordan Lee Boyd-Graber, Tianyi Zhou, Dinesh Manocha (* indicates equal contributions)"
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
project: "https://wuxiyang1996.github.io/autohallusion_page/"
redirect_from: 
  - /autohallusion
---

<p style="text-align:center;">
<img src="/images/AutoHallusion.png" width="800">
</p>

## Abstract
<div style="text-align: justify"> Large vision-language models (LVLMs) hallucinate: certain context cues in an image may trigger the language module's overconfident and incorrect reasoning on abnormal or hypothetical objects. Though a few benchmarks have been developed to investigate LVLM hallucinations, they mainly rely on hand-crafted corner cases whose fail patterns may hardly generalize, and finetuning on them could undermine their validity. These motivate us to develop the first automatic benchmark generation approach, AUTOHALLUSION, that harnesses a few principal strategies to create diverse hallucination examples. It probes the language modules in LVLMs for context cues and uses them to synthesize images by: (1) adding objects abnormal to the context cues; (2) for two co-occurring objects, keeping one and excluding the other; or (3) removing objects closely tied to the context cues. It then generates image-based questions whose ground-truth answers contradict the language module's prior. A model has to overcome contextual biases and distractions to reach correct answers, while incorrect or inconsistent answers indicate hallucinations. AUTOHALLUSION enables us to create new benchmarks at the minimum cost and thus overcomes the fragility of hand-crafted benchmarks. It also reveals common failure patterns and reasons, providing key insights to detect, avoid, or control hallucinations. Comprehensive evaluations of top-tier LVLMs, e.g., GPT-4V(ision), Gemini Pro Vision, Claude 3, and LLaVA-1.5, show a 97.7% and 98.7% success rate of hallucination induction on synthetic and real-world datasets of AUTOHALLUSION, paving the way for a long battle against hallucinations.
</div>
<br>


| Paper                                                     | Project Website                                                    | 
|-----------------------------------------------------------|--------------------------------------------------------------------|
| [**AutoHallusion**](https://arxiv.org/abs/2406.10900)    | [**Project Website**](https://wuxiyang1996.github.io/autohallusion_page/) |

<br>

Please cite our work if you found it useful,

```
@article{wu2024autohallusion,
  title={AUTOHALLUSION: Automatic Generation of Hallucination Benchmarks for Vision-Language Models},
  author={Wu, Xiyang and Guan, Tianrui and Li, Dianqi and Huang, Shuaiyi and Liu, Xiaoyu and Wang, Xijun and Xian, Ruiqi and Shrivastava, Abhinav and Huang, Furong and Boyd-Graber, Jordan Lee and others},
  journal={arXiv preprint arXiv:2406.10900},
  year={2024}
}
```