from openai import OpenAI
import requests
from PIL import Image
from io import BytesIO
import os

images_array = []


def generate_multiple_images(text, num_images):
    images = []
    for i in range(num_images):
        image = generate_image(text, i)
        images.append(image)
    return images


def generate_image(text, i):
    client = OpenAI(
        api_key="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"
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
