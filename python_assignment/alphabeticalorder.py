
user_input = input("Enter a list of names separated by spaces: ")
name_list = user_input.split()
name_list.sort()
print("The names in alphabetical order are:", ", ".join(name_list))
