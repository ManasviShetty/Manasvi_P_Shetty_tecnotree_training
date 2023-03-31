'''#Demo Example of file handling in Python that demonstrates how to open a file, read its contents, and write to it:

# Opening a file
file = open('demo.txt', 'r')
print(file)

# Reading from a file
content = file.read()
print(content)

# Closing a file
file.close()'''

# Writing to a file
with open('manu.txt', 'a') as file:
    file.write('\nhii manu.')

# Reading from a file again
with open('manu.txt', 'r') as file:
    content = file.read()
    print(content)
