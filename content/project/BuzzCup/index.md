---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "BuzzCup - Multi-agent Motion Simulator based on PID, OpenGL and MPI"
summary: "Buzzcup intends to simulate the PID control on the circluar motion of multiple agents. The environment is based on the OpenGL and each agent is controlled by a independent thread that communicates via MPI."
authors: [Xiyang Wu*]
tags: []
categories: []
date: 2019-12-03T20:38:10-07:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: "https://github.com/wuxiyang1996/6122-Advanced-Programing/tree/master/BuzzCup"
url_pdf: ""
url_slides: ""
url_video: "https://www.youtube.com/watch?v=bjaHEkHu6TA"

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---
<img src="./BuzzCup.gif" title="BuzzCup" width="600" height="300" />
Buzzcup intends to simulate the PID control on the circluar motion of multiple agents. The environment is based on the OpenGL and each agent is controlled by a independent thread that communicates via MPI. My responsibily in this project covers:
 * Investigate the multi-thread programming tool for C++, designed the multi-agent control system with MPI to ensure all the agents are controlled by an independent thread
 * Implement the PID control method based on the agent’s distance to the sphere center to stabilize the agent’s trajectory during its transferring process and rotating on the sphere
 * Visualize the simulation environment with 3-D computer graphics package OpenGL, presented the playground, intended sphere for surrounding and agents with their trajectory during the simulation
---
