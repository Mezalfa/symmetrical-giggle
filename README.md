<div align="right">

- Mesmer Alfs
- Haoran Li
- Sravan Kumar
- Navin Ramani

</div>

# Software as a Service: Google Cloud Vision API

In this assignment, the user can upload an image to the application (via HTML/client), which will then be processed using the Google Cloud Vision Labeling service on the server side using NodeJS+Express. The output presented to the user will be a formatted list of detected labels.

For instance, from an uploaded passport image, you may get an output like below:
{"labels":["Chin","Cheek","Eyebrow","Sleeve","Forehead","Skin","Collar","Jaw","Nose","Neck"]}

Clicking on the "Pretty-print" option will provide the same output like so:

```json
{
  "labels": [
    "Chin",
    "Cheek",
    "Eyebrow",
    "Sleeve",
    "Forehead",
    "Skin",
    "Collar",
    "Jaw",
    "Nose",
    "Neck"
  ]
}
