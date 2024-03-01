# import matplotlib.image as img
# import matplotlib.pyplot as plt
# from scipy.cluster.vq import whiten
# from scipy.cluster.vq import kmeans
# import pandas as pd

# batman_image = img.imread('4640.jpg')

# r = []
# g = []
# b = []
# for row in batman_image:
#     for temp_r, temp_g, temp_b in row:
#         r.append(temp_r)
#         g.append(temp_g)
#         b.append(temp_b)

# batman_df = pd.DataFrame({'red': r,
#                           'green': g,
#                           'blue': b})

# batman_df['scaled_color_red'] = whiten(batman_df['red'])
# batman_df['scaled_color_blue'] = whiten(batman_df['blue'])
# batman_df['scaled_color_green'] = whiten(batman_df['green'])

# cluster_centers, _ = kmeans(batman_df[['scaled_color_red',
#                                        'scaled_color_blue',
#                                        'scaled_color_green']], 3)

# dominant_colors = []

# red_std, green_std, blue_std = batman_df[['red',
#                                           'green',
#                                           'blue']].std()

# for cluster_center in cluster_centers:
#     red_scaled, green_scaled, blue_scaled = cluster_center
#     dominant_colors.append((
#         red_scaled * red_std / 255,
#         green_scaled * green_std / 255,
#         blue_scaled * blue_std / 255
#     ))

# plt.imshow([dominant_colors])
# plt.show()

# Import the Packages
# from sklearn.cluster import KMeans
# import numpy as np
# import matplotlib.pyplot as plt
# import matplotlib.image as mpimg

# # Load the image using mpimg.imread(). Use a raw string (prefix r) or escape the backslashes.
# image = mpimg.imread('4640.jpg')

# # Get the dimensions (width, height, and depth) of the image
# w, h, d = tuple(image.shape)

# # Reshape the image into a 2D array, where each row represents a pixel
# pixel = np.reshape(image, (w * h, d))

# # Import the KMeans class from sklearn.cluster

# # Set the desired number of colors for the image
# n_colors = 18

# # Create a KMeans model with the specified number of clusters and fit it to the pixels
# model = KMeans(n_clusters=n_colors, random_state=42).fit(pixel)

# # Get the cluster centers (representing colors) from the model
# colour_palette = np.uint8(model.cluster_centers_)

# # Display the color palette as an image
# plt.imshow([colour_palette])

# # Show the plot
# plt.show()
