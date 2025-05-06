---
title: "VideoHallu: Evaluating and Mitigating Multi-modal Hallucinations for Synthetic Videos"
collection: publications
permalink: /publications/VideoHallu_05-02_2025
excerpt: "Synthetic video generation using foundation models has gained significant attention due to its realism and broad applications. However, while these models excel at generating visually coherent and high-quality video frames, they often overlook commonsense reasoning and physical law violations, leading to abnormal content. Existing score-based evaluations like VideoScore mainly focus on general video quality and do not take these abnormalities into account, and offer no explanations of the evaluation results. A more promising evaluation approach is to leverage multi-modal large language models (MLLMs) as interpretable video evaluators, following the approach of FActScore. However, how well MLLMs can detect these abnormalities in synthetic videos is underexplored.
Motivated by a more interpretable video generation evaluation, we introduce VideoHallu, a benchmark built from synthetic videos produced by popular models like Sora, Veo2, Kling, paired with expert-crafted question-answering pair examples easily solvable with human-level perception and reasoning across multiple categories. We evaluate several State-of-the-Art (SoTA) MLLMs with our benchmark, including GPT-4o, Gemini-2.5-Pro, Qwen-2.5-VL, and forefront models like Video-R1 and VideoChat-R1. Despite the strong performance of R1 MLLMs on real-world video benchmarks like MVBench and MovieChat, these models still struggle and hallucinate on basic commonsense and physics reasoning tasks in synthetic videos, highlighting synthetic video hallucination as an underexplored challenge.
Moreover, we post-train current SoTA MLLMs, Qwen-2.5-VL-7B, with Group Relative Policy Optimization (GRPO) using both real-world and synthetic commonsense/physics datasets. Our results show improved overall accuracy compared to the base model, achieving the highest performance among all models, highlighting the importance of integrating high-quality counterexamples to enhance commonsense and physics reasoning in MLLMs' language priors."
date: 2025-05-02
venue: 'arXiv'
short: 'arXiv'
paperurl: 'https://www.arxiv.org/abs/2505.01481'
teaser: '/images/VideoHallu.png'
authors: "Zongxia Li*, <b>Xiyang Wu*</b>, Yubin Qin, Guangyao Shi, Hongyang Du, Dinesh Manocha, Tianyi Zhou, Jordan Lee Boyd-Graber (* indicates equal contributions)"
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
project: "https://wuxiyang1996.github.io/videohallu_page/"
code: "https://github.com/zli12321/VideoHallu"
dataset: "https://huggingface.co/datasets/IntelligenceLab/VideoHallu"
redirect_from: 
  - /videohallu
---

<p style="text-align:center;">
<img src="/images/AutoHallusion.png" width="800">
</p>

## Abstract
<div style="text-align: justify"> Synthetic video generation using foundation models has gained significant attention due to its realism and broad applications. However, while these models excel at generating visually coherent and high-quality video frames, they often overlook commonsense reasoning and physical law violations, leading to abnormal content. Existing score-based evaluations like VideoScore mainly focus on general video quality and do not take these abnormalities into account, and offer no explanations of the evaluation results. A more promising evaluation approach is to leverage multi-modal large language models (MLLMs) as interpretable video evaluators, following the approach of FActScore. However, how well MLLMs can detect these abnormalities in synthetic videos is underexplored.

Motivated by a more interpretable video generation evaluation, we introduce VideoHallu, a benchmark built from synthetic videos produced by popular models like Sora, Veo2, Kling, paired with expert-crafted question-answering pair examples easily solvable with human-level perception and reasoning across multiple categories. We evaluate several State-of-the-Art (SoTA) MLLMs with our benchmark, including GPT-4o, Gemini-2.5-Pro, Qwen-2.5-VL, and forefront models like Video-R1 and VideoChat-R1. Despite the strong performance of R1 MLLMs on real-world video benchmarks like MVBench and MovieChat, these models still struggle and hallucinate on basic commonsense and physics reasoning tasks in synthetic videos, highlighting synthetic video hallucination as an underexplored challenge.

Moreover, we post-train current SoTA MLLMs, Qwen-2.5-VL-7B, with Group Relative Policy Optimization (GRPO) using both real-world and synthetic commonsense/physics datasets. Our results show improved overall accuracy compared to the base model, achieving the highest performance among all models, highlighting the importance of integrating high-quality counterexamples to enhance commonsense and physics reasoning in MLLMs' language priors.
</div>
<br>


| Paper                                              | Project Website                                                    | Code                                                        | Dataset         | 
|----------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------|-----------------|
| [**VideoHallu**](https://www.arxiv.org/abs/2505.01481) | [**Project Website**](https://wuxiyang1996.github.io/videohallu_page/) | [**GitHub**](https://github.com/zli12321/VideoHallu) | [**Dataset**](https://huggingface.co/datasets/IntelligenceLab/VideoHallu) |

<br>

Please cite our work if you found it useful,

```
@misc{li2025videohalluevaluatingmitigatingmultimodal,
      title={VideoHallu: Evaluating and Mitigating Multi-modal Hallucinations for Synthetic Videos}, 
      author={Zongxia Li and Xiyang Wu and Yubin Qin and Guangyao Shi and Hongyang Du and Dinesh Manocha and Tianyi Zhou and Jordan Lee Boyd-Graber},
      year={2025},
      eprint={2505.01481},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2505.01481}, 
}
```