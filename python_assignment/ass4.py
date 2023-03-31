x = input("Enter a string: ")

# Calculate the length of the string using the len() function
string_length = len(x)

# Get the first and last characters of the string
first_char = x[0]
last_char = x[-1]

# Reverse the string using slicing
reverse_string = x[::-1]

# Print out the results
print("The length of the string is:", string_length)
print("The first character of the string is:", first_char)
print("The last character of the string is:", last_char)
print("The string in reverse order is:", reverse_string)
