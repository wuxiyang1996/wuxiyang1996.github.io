---
title: "On the Vulnerability of LLM/VLM-Controlled Robotics"
collection: publications
permalink: /publications/adversary_robot_02_15_2024
excerpt: "In this work, we highlight vulnerabilities in robotic systems integrating large language models (LLMs) and vision-language models (VLMs) due to input modality sensitivities. While LLM/VLM-controlled robots show impressive performance across various tasks, their reliability under slight input variations remains underexplored yet critical. These models are highly sensitive to instruction or perceptual input changes, which can trigger misalignment issues, leading to execution failures with severe real-world consequences. To study this issue, we analyze the misalignment-induced vulnerabilities within LLM/VLM-controlled robotic systems and present a mathematical formulation for failure modes arising from variations in input modalities. We propose empirical perturbation strategies to expose these vulnerabilities and validate their effectiveness through experiments on multiple robot manipulation tasks. Our results show that simple input perturbations reduce task execution success rates by 22.2% and 14.6% in two representative LLM/VLM-controlled robotic systems. These findings underscore the importance of input modality robustness and motivate further research to ensure the safe and reliable deployment of advanced LLM/VLM-controlled robotic systems."
date: 2025-06-15
venue: 'The IEEE/RSJ International Conference on Intelligent Robots and Systems'
short: 'IROS 2025'
paperurl: 'https://arxiv.org/abs/2402.10340'
teaser: '../images/adversary_robot.png'
authors: "<b>Xiyang Wu</b>, Souradip Chakraborty, Ruiqi Xian, Jing Liang, Tianrui Guan, Fuxiao Liu, Brian Sadler, Dinesh Manocha, Amrit Singh Bedi"
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
project: "https://wuxiyang1996.github.io/adversary-vlm-robotics/"
code: "https://github.com/wuxiyang1996/Adversary-Robotics"
redirect_from: 
  - /adversary_robot
---

<p style="text-align:center;">
<img src="/images/adversary_robot.png" width="800">
</p>

## Abstract
<div style="text-align: justify"> In this work, we highlight vulnerabilities in robotic systems integrating large language models (LLMs) and vision-language models (VLMs) due to input modality sensitivities. While LLM/VLM-controlled robots show impressive performance across various tasks, their reliability under slight input variations remains underexplored yet critical. These models are highly sensitive to instruction or perceptual input changes, which can trigger misalignment issues, leading to execution failures with severe real-world consequences. To study this issue, we analyze the misalignment-induced vulnerabilities within LLM/VLM-controlled robotic systems and present a mathematical formulation for failure modes arising from variations in input modalities. We propose empirical perturbation strategies to expose these vulnerabilities and validate their effectiveness through experiments on multiple robot manipulation tasks. Our results show that simple input perturbations reduce task execution success rates by 22.2% and 14.6% in two representative LLM/VLM-controlled robotic systems. These findings underscore the importance of input modality robustness and motivate further research to ensure the safe and reliable deployment of advanced LLM/VLM-controlled robotic systems.
</div>
<br>


| Paper                                         | Project Website                                                                | Code | 
|-----------------------------------------------|------------------------------------------------------------------------|------|
| [**arXiv**](https://arxiv.org/abs/2402.10340) | [**Project Website**](https://wuxiyang1996.github.io/adversary-vlm-robotics/)| [**GitHub Code**](https://github.com/wuxiyang1996/Adversary-Robotics) | 

<br>

Please cite our work if you found it useful,

```
@misc{wu2024highlightingsafetyconcernsdeploying,
      title={Highlighting the Safety Concerns of Deploying LLMs/VLMs in Robotics}, 
      author={Xiyang Wu and Souradip Chakraborty and Ruiqi Xian and Jing Liang and Tianrui Guan and Fuxiao Liu and Brian M. Sadler and Dinesh Manocha and Amrit Singh Bedi},
      year={2024},
      eprint={2402.10340},
      archivePrefix={arXiv},
      primaryClass={cs.RO},
      url={https://arxiv.org/abs/2402.10340}, 
}
```