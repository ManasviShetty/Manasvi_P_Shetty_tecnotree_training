# Ask the user to enter a list of numbers separated by spaces
user_input = input("Enter a list of numbers separated by spaces: ")

# Split the input string into a list of numbers using the split() function
number_list = user_input.split()

# Convert the strings in the list to float values
number_list = [float(num) for num in number_list]

# Find the largest and smallest numbers in the list using the max() and min() functions
largest_number = max(number_list)
smallest_number = min(number_list)

# Print out the results
print("The largest number in the list is:", largest_number)
print("The smallest number in the list is:", smallest_number)
