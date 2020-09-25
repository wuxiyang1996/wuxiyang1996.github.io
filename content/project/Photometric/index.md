---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Online Component Scratch Inspection System Based on the Photometric Stereo Method"
summary: "This project intends to realize the online scratch inspection tasks on the surface of the complex components. The deviation introduced by conveyer is compensated with shape template matching. The surface variation is reconstructed through photometric stereo method, which helps to extract the defect via local grayscale comparsion."
authors: [Haoyue Liu, Xiyang Wu*, Ning Yan, Zexiao Li, Xiaodong Zhang]
tags: []
categories: []
date: 2019-08-15T20:38:33-07:00

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
This project intends to realize the online scratch inspection tasks on the surface of the complex components. The deviation introduced by conveyer is compensated with shape template matching. The surface variation is reconstructed through photometric stereo method, which helps to extract the defect via local grayscale comparsion. My responsibily covers:
 * Survey frontiers of the automatic inspection system for complex components, investigate various scratch detection methods, design the online inspection system with the photometric stereo method
 * Coordinate the images in the online inspection environment by shape matching to compensate for the spatial deviation between proximate images, generated and implemented the region template to extract the inspection region at each inspection location 
 * Generate the curvature image with the photometric stereo method that presents the surface contour in grayscale, detect scratches on the component’s surface with image morphology method
 * Summarize and present the investigation result in the undergraduate thesis and the paper Online defects detection method for gearboxcover based on the four-source photometric stereo method

---
