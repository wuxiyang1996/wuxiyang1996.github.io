---
title: "Highlighting the Safety Concerns of Deploying LLMs/VLMs in Robotics"
collection: publications
permalink: /publications/adversary_robot_02_15_2024
excerpt: "In this paper, we highlight the critical issues of robustness and safety associated with integrating large language models (LLMs) and vision-language models (VLMs) into robotics applications. Recent works focus on using LLMs and VLMs to improve the performance of robotics tasks, such as manipulation and navigation. Despite these improvements, analyzing the safety of such systems remains underexplored yet extremely critical. LLMs and VLMs are highly susceptible to adversarial inputs, prompting a significant inquiry into the safety of robotic systems. This concern is important because robotics operate in the physical world where erroneous actions can result in severe consequences. This paper explores this issue thoroughly, presenting a mathematical formulation of potential attacks on LLM/VLM-based robotic systems and offering experimental evidence of the safety challenges. Our empirical findings highlight a significant vulnerability: simple modifications to the input can drastically reduce system effectiveness. Specifically, our results demonstrate an average performance deterioration of 19.4% under minor input prompt modifications and a more alarming 29.1% under slight perceptual changes. These findings underscore the urgent need for robust countermeasures to ensure the safe and reliable deployment of advanced LLM/VLM-based robotic systems."
date: 2024-06-15
venue: 'arXiv:2402.10340'
short: 'Under Review'
paperurl: 'https://arxiv.org/abs/2402.10340'
teaser: '/images/adversary_robot.jpg'
authors: "<b>Xiyang Wu</b>, Souradip Chakraborty, Ruiqi Xian, Jing Liang, Tianrui Guan, Fuxiao Liu, Brian Sadler, Dinesh Manocha, Amrit Singh Bedi"
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
project: "https://wuxiyang1996.github.io/adversary-vlm-robotics/"
code: "https://github.com/wuxiyang1996/Adversary-Robotics"
redirect_from: 
  - /adversary_robot
---

<p style="text-align:center;">
<img src="/images/adversary_robot.jpg" width="800">
</p>

## Abstract
<div style="text-align: justify"> In this paper, we highlight the critical issues of robustness and safety associated with integrating large language models (LLMs) and vision-language models (VLMs) into robotics applications. Recent works focus on using LLMs and VLMs to improve the performance of robotics tasks, such as manipulation and navigation. Despite these improvements, analyzing the safety of such systems remains underexplored yet extremely critical. LLMs and VLMs are highly susceptible to adversarial inputs, prompting a significant inquiry into the safety of robotic systems. This concern is important because robotics operate in the physical world where erroneous actions can result in severe consequences. This paper explores this issue thoroughly, presenting a mathematical formulation of potential attacks on LLM/VLM-based robotic systems and offering experimental evidence of the safety challenges. Our empirical findings highlight a significant vulnerability: simple modifications to the input can drastically reduce system effectiveness. Specifically, our results demonstrate an average performance deterioration of 19.4% under minor input prompt modifications and a more alarming 29.1% under slight perceptual changes. These findings underscore the urgent need for robust countermeasures to ensure the safe and reliable deployment of advanced LLM/VLM-based robotic systems.
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