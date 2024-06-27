from openai import OpenAI


def chatBot2(prompt, text, section):

    client = OpenAI(
        api_key="sk-proj-EVnHgSlU0irW8wTLoooBT3BlbkFJ61eb3PEJzVwftWERjZ9p"
    )

    if section == "title":
        text = "Based on the following text: " + \
            f"{text}" + " " + "regenerate but make the following improvements: " + \
            prompt + "Use no more than 5 words."
    elif section == "description":
        text = "Based on the following text: " + \
            f"{text}" + " " + "regenerate but make the following improvements: " + \
            prompt + "Write a short paragraph."

    result = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": text
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(result.choices[0].message.content)
    return result.choices[0].message.content
