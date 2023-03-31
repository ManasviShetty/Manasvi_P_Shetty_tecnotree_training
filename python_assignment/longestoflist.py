def longest_words(words):
    # Sort the list of words in descending order based on the length of each word
    words.sort(key=len, reverse=True)

    # Get the first  word from the sorted list
    longest_words = words[:1]

    return longest_words

# Example usage
word_list = ['park', 'cycling', 'palace', 'helooo', 'silence']
result = longest_words(word_list)
print(f"The first two longest words in the list are: {result}")
