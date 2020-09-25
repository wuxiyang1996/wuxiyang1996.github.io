---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Design and Simulation of a 5-DOF Writing Manipulator"
summary: "This project intends to implement the character writing task on an unknown 5-DOF manipulator. The purpose incorporates the analysis of the kinematic and dynamic feature of the manipulator, the mechanical model design and FEA, trajectory planning and basic manipulator control."
authors: [Xiyang Wu*]
tags: []
categories: []
date: 2017-12-10T20:38:51-07:00

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
This project intends to implement the character writing task on an unknown 5-DOF manipulator. The purpose incorporates the analysis of the kinematic and dynamic feature of the manipulator, the mechanical model design and FEA, trajectory planning and basic manipulator control. My responsibily in this project covers:
 * Establish the connecting rod model of the manipulator according to standard D-H Representation, derive its kinematics expression
 * Research on trajectory planning methods in joint and Cartesian space, design the trajectory of the actuator, gain the variation of each joint’s outcome during their entire working process with MATLAB Robotic Toolbox, and complete the static analysis of the manipulator
 * Build up the 3-D model of the manipulator in SOLIDWORKS, obtain the strain distribution throughout the manipulator under different external forces through finite element analysis, and manage the manipulator’s dynamic analysis with ADAMS
 * Established the steering gear mathematical model, design the control and communication system between manipulator and laptop by using LabVIEW and Arduino
---
