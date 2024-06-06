from colorthief import ColorThief
import matplotlib.pyplot as plt
import math
import colorsys
import math


def color_pallete(image_path):
    new_path = f'../../public/images/{image_path}'
    ct = ColorThief(new_path)
    palette = ct.get_palette(color_count=2)
    colors = []
    for color in palette:
        clr = [f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"]
        colors += clr

    print(colors)
    return colors
