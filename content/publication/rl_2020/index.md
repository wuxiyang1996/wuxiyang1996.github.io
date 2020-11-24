---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "FireCommander: An Interactive, Probabilistic Multi-agent Environment for Joint Perception-Action Tasks"
authors: [Esmaeil Seraj, Xiyang Wu*, Matthew Gombolay]
date: 2020-10-31T02:06:07-08:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate:  2020-10-31T02:06:07-08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arxiv: 2011.00165"
publication_short: ""

abstract: ""

# Summary. An optional shortened abstract.
summary: "The FireCommander is an interactive, probabilistic joint perception-action reconnaissance environment. In FireCommander game, a composite team of agents must be tasked to optimally deal with a dynamic, propagating wildfire situation in an environment with propagating fire areas and facilities. The team of agents can accomplish their mission by first sensing, communicating the sensed fire-information among each other and then taking action to put the firespots out based on the sensed information. The FireCommander environment can be useful for research topics from Reinforcement Learning to Human-Robot Interaction."

tags: []
categories: []
featured: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter
 
url_pdf: "https://arxiv.org/abs/2011.00165"
url_code:
url_dataset:
url_poster:
url_project:
url_slides: "pubilication/rl_2020/FireCommander2020_Xiyang_Wu.pdf"
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "featured.jpg"
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
The FireCommander is an interactive, probabilistic joint perception-action reconnaissance environment in which a composite team of agents (e.g., robots) cooperate to fight dynamic, propagating firespots (e.g., targets). In FireCommander game, a team of agents must be tasked to optimally deal with a wildfire situation in an environment with propagating fire areas and some facilities such as houses, hospitals, power stations, etc. The team of agents can accomplish their mission by first sensing (e.g., estimating fire states), communicating the sensed fire-information among each other and then taking action to put the firespots out based on the sensed information (e.g., dropping water on estimated fire locations). The FireCommander environment can be useful for research topics spanning a wide range of applications from Reinforcement Learning (RL) and Learning from Demonstration (LfD), to Coordination, Psychology, Human-Robot Interaction (HRI) and Teaming. My responsibility in this project covers:
 * Investigate the state-of-art of the reinforcement learning, learning from demonstration and multi-agent control, establish the agent kinematics and control model
 * Design the simulation environment for the multi-agent firefighting tasks with PyGame based on the real environment setting, fire propagation model, agent kinematics and control model
 * Establish the user-interface with PyQt5 to incorporate the user input or scenario design with the simulation environment, design the data storage and animation reconstruction method
 * Implement the reward function based on the hierarchy importance of target, implement various scenarios to deal with real-world circumstances
---
