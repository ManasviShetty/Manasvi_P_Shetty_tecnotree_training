str = "Good Morning"

vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
i = 0
for c in str:
    if c in vowels:
        str = str[:i] + str[i+1:]
        i = i-1
    i = i+1

print("After removing Vowels : ", str)