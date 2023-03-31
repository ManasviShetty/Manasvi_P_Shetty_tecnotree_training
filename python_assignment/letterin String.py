def count_letters(string):
    # Create dictionary to store letter counts
    letter_counts = {}

    # Iterate over each character in the string
    for char in string:
        # If character is a letter, add to dictionary or increment count
        if char.isalpha():
            if char.lower() in letter_counts:
                letter_counts[char.lower()] += 1
            else:
                letter_counts[char.lower()] = 1

    # Return the letter counts
    return letter_counts

# Example usage:
string = "sunday morning!"
letter_counts = count_letters(string)
print(letter_counts) 
