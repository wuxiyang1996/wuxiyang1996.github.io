---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Online defects detection method for gearboxcover based on the four-source photometric stereo method"
authors: [Haoyue Liu, Xiyang Wu*, Ning Yan, Zexiao Li, Xiaodong Zhang]
date: 2020-09-05T16:23:35-07:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-09-24T18:04:35-07:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "IEEE Transactions on Instrumentation & Measurement (Manuscript Submitted)"
publication_short: ""

abstract: ""

# Summary. An optional shortened abstract.
summary: "This project intends to realize the online scratch inspection tasks on the surface of the complex components. The deviation introduced by conveyer is compensated with shape template matching. The surface variation is reconstructed through photometric stereo method, which helps to extract the defect via local grayscale comparsion."

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

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "featured.png"
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
The photometric stereo method is effective in online inspection tasks, but its performance could be negatively affected by the spatial deviation in raw image, which necessarily exists in the online inspection environment. This article presents an online scratch detection method based on the four-source photometric stereo method. Considering the size of the component, the system divides the inspection process into several locations and generates the standard template covering the whole component beforehand. Once the component approaches one of the presupposed locations, lights from different directions turn on successively and the inspection system acquires images under dim lateral lights. After acquisition, the system compensates the images acquired for their spatial deviation, and coordinates them on the standard template. After coordination, the system extracts the inspection region in the coordinated images, generates the curvature image with the photometric stereo method and detects scratches in the curvature image. Two experiments are designed to verify the feasibility of the inspection method and evaluate the system's performance in the online inspection environment. According to the result, the system's performance meets the accuracy requirements, which verifies the feasibility of this inspection method.
---
