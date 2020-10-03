---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Content-Weighted Autoencoder for Image Compression"
summary: "This project presents a novel neural network structure for image compression tasks. The network incorporates the importance map that enhances the details in the image to the vanilla ResNet autoencoder. The result confirms the superior compression performance of the convolutional autoencoder with the importance map over the traditional 3-layer convolutional autoencoder and the vanilla ResNet autoencoder."
authors: [Xiyang Wu*]
tags: []
categories: []
date: 2019-12-15T20:37:54-07:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "From left to right: Original, 3-layer ConvAE, ResNetAE, Content-Weighted AE"
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: "https://github.com/xwu391/6258-DIP/"
url_pdf: "project/feature_map/ECE_6258_Final_Project_Xiyang_Wu.pdf"
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---
This project presents a novel neural networkstructure for image compression tasks. The network structure utilizes the ResNet autoencoder for the encoder and decoder part, and incorporates the importance map to enhance the details in the image. The result shows that the compression performance of the convolutional autoencoder with the importance map is superior to the traditional 3-layer convolutional autoencoder and the ResNet autoencoder without the importance map under multiple image compression quality metrics. My responsibility in this project covers:
 * Investigate the frontiers of lossy image compression and super-resolution with deep learning methods
 * Design the content-weighted autoencoder and the content-weighted importance map and the quantization layer that enhances the important features within the images by deeply compressing the background, 
 * Compare the performance of the content-weighted autoencoder with the four-layer CNN and ResNet autoencoder without quantization layer using the same encoding size with multiple experiments
 * Verify its superior performance in maintaining the high reconstruction quality with low bpp rate

---
