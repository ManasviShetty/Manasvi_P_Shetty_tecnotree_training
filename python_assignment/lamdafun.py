# Define a list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Use a lambda function to filter out even numbers and double the remaining odd numbers
result = list(map(lambda num: num * 2, filter(lambda num: num % 2 == 0, numbers)))

# Print the result
print(result)
