from openai import OpenAI


def chatBot(text):
    print(text)

    client = OpenAI(
        api_key="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"
    )

    prompt = "Write a short description about" + text

    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "user",
             "content": prompt
             },
        ],
        model="gpt-3.5-turbo",
    )
    print(chat_completion.choices[0].message.content)
    return chat_completion.choices[0].message.content
