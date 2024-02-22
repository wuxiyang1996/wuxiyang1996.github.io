---
title: "On the Safety Concerns of Deploying LLMs/VLMs in Robotics: Highlighting the Risks and Vulnerabilities"
collection: publications
permalink: /publications/adversary_robot_02_15_2024
excerpt: "In this paper, we highlight the critical issues of robustness and safety associated with integrating large language models (LLMs) and vision-language models (VLMs) into robotics applications. Recent works have focused on using LLMs and VLMs to improve the performance of robotics tasks, such as manipulation, navigation, etc. However, such integration can introduce significant vulnerabilities, in terms of their susceptibility to adversarial attacks due to the language models, potentially leading to catastrophic consequences. By examining recent works at the interface of LLMs/VLMs and robotics, we show that it is easy to manipulate or misguide the robot's actions, leading to safety hazards. We define and provide examples of several plausible adversarial attacks, and conduct experiments on three prominent robot frameworks integrated with a language model, including KnowNo VIMA, and Instruct2Act, to assess their susceptibility to these attacks. Our empirical findings reveal a striking vulnerability of LLM/VLM-robot integrated systems: simple adversarial attacks can significantly undermine the effectiveness of LLM/VLM-robot integrated systems. Specifically, our data demonstrate an average performance deterioration of 21.2% under prompt attacks and a more alarming 30.2% under perception attacks. These results underscore the critical need for robust countermeasures to ensure the safe and reliable deployment of the advanced LLM/VLM-based robotic systems."
date: 2024-02-15
venue: 'arXiv:2402.10340'
short: 'Under Review'
paperurl: 'https://arxiv.org/abs/2402.10340'
teaser: '/images/adversary_robot.png'
authors: "<b>Xiyang Wu</b>, Ruiqi Xian, Tianrui Guan, Jing Liang, Souradip Chakraborty, Fuxiao Liu, Brian Sadler, Dinesh Manocha, Amrit Singh Bedi"
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
<div style="text-align: justify"> 'In this paper, we highlight the critical issues of robustness and safety associated with integrating large language models (LLMs) and vision-language models (VLMs) into robotics applications. Recent works have focused on using LLMs and VLMs to improve the performance of robotics tasks, such as manipulation, navigation, etc. However, such integration can introduce significant vulnerabilities, in terms of their susceptibility to adversarial attacks due to the language models, potentially leading to catastrophic consequences. By examining recent works at the interface of LLMs/VLMs and robotics, we show that it is easy to manipulate or misguide the robot's actions, leading to safety hazards. We define and provide examples of several plausible adversarial attacks, and conduct experiments on three prominent robot frameworks integrated with a language model, including KnowNo VIMA, and Instruct2Act, to assess their susceptibility to these attacks. Our empirical findings reveal a striking vulnerability of LLM/VLM-robot integrated systems: simple adversarial attacks can significantly undermine the effectiveness of LLM/VLM-robot integrated systems. Specifically, our data demonstrate an average performance deterioration of 21.2% under prompt attacks and a more alarming 30.2% under perception attacks. These results underscore the critical need for robust countermeasures to ensure the safe and reliable deployment of the advanced LLM/VLM-based robotic systems.'
</div>
<br>


| Paper                                         | Project Website                                                                | Code | 
|-----------------------------------------------|------------------------------------------------------------------------|------|
| [**arXiv**](https://arxiv.org/abs/2402.10340) | [**Project Website**](https://wuxiyang1996.github.io/adversary-vlm-robotics/)| [**GitHub Code**](https://github.com/wuxiyang1996/Adversary-Robotics) | 

<br>

Please cite our work if you found it useful,

```
@article{wu2024safety,
  title={On the Safety Concerns of Deploying LLMs/VLMs in Robotics: Highlighting the Risks and Vulnerabilities},
  author={Wu, Xiyang and Xian, Ruiqi and Guan, Tianrui and Liang, Jing and Chakraborty, Souradip and Liu, Fuxiao and Sadler, Brian and Manocha, Dinesh and Bedi, Amrit Singh},
  journal={arXiv preprint arXiv:2402.10340},
  year={2024}
}
```