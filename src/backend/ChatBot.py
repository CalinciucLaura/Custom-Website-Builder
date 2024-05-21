from openai import OpenAI


def chatBot(text):
    client = OpenAI(
        api_key="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"
    )

    result = []
    title = "Write a title for a website about " + \
        text + "in 5 words or less. Don't use "" or '' or any other punctuation. Don't use `website` as a word."
    about = "Write a short description about " + text
    description1 = "Write a short random information about " + text + \
        " in one paragraph and no more than 2-3 sentences"
    description2 = "Write a fact about " + text + \
        " in one paragraph and no more than 2-3 sentences"
    description3 = "Write something about " + text + \
        " in one paragraph and no more than 2-3 sentences"
    quote = "Write a quote about " + text + "and mention the author's name"

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

    description1_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": description1
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(description1_completion.choices[0].message.content)

    description2_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": description2
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(description2_completion.choices[0].message.content)

    description3_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": description3
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(description3_completion.choices[0].message.content)

    quote_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": quote
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(quote_completion.choices[0].message.content)

    return [title_completion.choices[0].message.content, about_completion.choices[0].message.content, description1_completion.choices[0].message.content, description2_completion.choices[0].message.content, description3_completion.choices[0].message.content, quote_completion.choices[0].message.content]
