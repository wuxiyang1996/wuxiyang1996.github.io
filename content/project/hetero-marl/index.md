---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Learning Heterogeneous Multi-agent Communication for Joint Perception-Control Tasks"
summary: "Focusing on the coopeartive heterogenous MARL in FireCommander2020 environment, which is highly dynamic and stochastic, this project intends to investigate and propose a multi-agent communication learning framework to improve the cooperative behavior in collaborative Markov games and existing MARL algorithms."
authors: []
tags: []
categories: []
date: 2020-10-04T21:53:45-07:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---
Focusing on the coopeartive heterogenous MARL in FireCommander2020 environment, which is highly dynamic and stochastic, this project intends to investigate and propose a multi-agent communication learning framework to improve the cooperative behavior in collaborative Markov games and existing MARL algorithms. This project is still ongoing and expected to be done at the end of November. My responsibilities in this project covers:
 * Investigate the state-of-the-art multi-agent reinforcement learning algorithms, analyze the characteristics for several popular MARL algorithm, formulate the communication-problem in FireCommander environment as a POMDP
 * Regulate the FireCommander2020 environment for the multi-agent reinforcement learning, incorporate the agent and fire state update, reward computation module within the framework
 * Implement several vanilla MARL algorithms such as IDQN or IA3C, etc. on FireCommander environment for learning end-to-end differentiable communication channel
 * Implement a heterogeneous end-to-end differentiable communication channel for improved collective behavior in MARL
 * Compare the performace with several baseline network, like IDQN, IA3C, DIAL, QMIX, etc.
---
