# Take list of numbers input from user
num_list = input("Enter a list of numbers separated by spaces: ").split()

# Convert input strings to integers
num_list = [int(num) for num in num_list]

# Create list to store squared elements
squared_list = []

# Square each element in the num_list and append to squared_list
for num in num_list:
    squared_list.append(num**2)

# Print the squared list
print(squared_list)
