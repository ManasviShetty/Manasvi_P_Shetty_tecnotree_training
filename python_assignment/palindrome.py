def filter_palindromes(strings):
    palindromes = []
    for string in strings:
        if string == string[::-1]:
            palindromes.append(string)
    return palindromes

# Example usage
strings = ["dod", "umbrella", "python", "mam", "civic"]
palindromes = filter_palindromes(strings)
print(palindromes)  
