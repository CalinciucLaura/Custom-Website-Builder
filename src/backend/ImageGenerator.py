from openai import OpenAI
import requests
from PIL import Image
from io import BytesIO
import os
from ColorPicker import color_pallete


images_array = []


def generate_multiple_images(text, num_images):
    images = []

    if "Generate a website about" in text:
        text = text.replace("Generate a website about", "")
    elif "Create a website for" in text:
        text = text.replace("Create a website for", "")
    elif "generate a website about" in text:
        text = text.replace("generate a website about", "")
    elif "i want a website about " in text:
        text = text.replace("i want a website about ", "")
    elif "website about " in text:
        text = text.replace("website about ", "")

    text = text.strip()

    for i in range(num_images):
        image = generate_image(text, i)
        if i == 0:
            colors = color_pallete(image)
        images.append(image)
    return images, colors


def generate_image(text, i):
    client = OpenAI(
        api_key="sk-proj-EVnHgSlU0irW8wTLoooBT3BlbkFJ61eb3PEJzVwftWERjZ9p"
    )

    if i > 0:
        response = client.images.generate(
            model="dall-e-3",
            prompt="Generate a realistic image with " + text,
            size="1024x1024",
            quality="standard",
            n=1,
        )
    else:
        response = client.images.generate(
            model="dall-e-3",
            prompt="Generate a simple image with only one " + text,
            size="1792x1024",
            quality="standard",
            n=1,
        )

    image_url = response.data[0].url
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))
    image.show()

    os.makedirs('images', exist_ok=True)
    image_path = image.save(f'../../public/images/{text}{i+1}.png')
    image = f'{text}{i+1}.png'
    return image
