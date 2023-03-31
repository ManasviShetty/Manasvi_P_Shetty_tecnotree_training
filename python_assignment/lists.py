def common_elements(list1, list2):
    result = []
    for num in list1:
        if num in list2 and num not in result:
            result.append(num)
    return result

list1 = input("Enter the first list of numbers separated by space: ").split()
list2 = input("Enter the second list of numbers separated by space: ").split()

# Convert the input strings to lists of integers
list1 = [int(num) for num in list1]
list2 = [int(num) for num in list2]

common = common_elements(list1, list2)
print(f"The common elements in both lists are: {common}")
