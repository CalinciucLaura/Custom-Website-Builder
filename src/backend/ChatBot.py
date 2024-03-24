from openai import OpenAI


def chatBot(text):
    print(text)

    client = OpenAI(
        api_key="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"
    )

    result = []
    title = "Write a title for a website about " + text
    about = "Write a short description about " + text

    title_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": title
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(title_completion.choices[0].message.content)

    about_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": about
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(about_completion.choices[0].message.content)

    return [title_completion.choices[0].message.content, about_completion.choices[0].message.content]
