from colorthief import ColorThief
import matplotlib.pyplot as plt
import math
import colorsys
import math


# def hex_to_rgb(hex_color):
#     return tuple(int(hex_color[i:i+2], 16) for i in (1, 3, 5))


# def isLightOrDark(rgbColor):
#     [r, g, b] = rgbColor
#     hsp = math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
#     if (hsp > 127.5):
#         return 'light'
#     else:
#         return 'dark'


def color_pallete(image_path):
    new_path = f'../../public/images/{image_path}'
    ct = ColorThief(new_path)
    palette = ct.get_palette(color_count=2)
    colors = []
    for color in palette:
        clr = [f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"]
        colors += clr

    print(colors)
    # print(isLightOrDark(hex_to_rgb(colors[0])))
    return colors
