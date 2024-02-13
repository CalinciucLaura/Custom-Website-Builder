from colorthief import ColorThief
import matplotlib.pyplot as plt
import colorsys
import os

def color_pallete(image_path):
    ct = ColorThief(image_path)
    palette = ct.get_palette(color_count=3)
    # plt.imshow([[palette[i] for i in range(3)]])
    # plt.show()

    for color in palette:
        return f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"


# print(color_pallete("../assets/images/3.jpg"))

image_directory = 'webs/src/assets/images'
image_files = [os.path.join(image_directory, f) for f in os.listdir(
    image_directory) if f.endswith('.jpg') or f.endswith('.png')]

all_collor_pallete = []
for image_file in image_files:
    all_collor_pallete += [color_pallete(image_file)]

print(all_collor_pallete)


