import random

# Define a list of words
words = ['apple', 'banana', 'cherry', 'orange', 'pear']

# Select a random word from the list
secret_word = random.choice(words)

# Initialize the list of guessed letters
guessed_letters = []

# Define a function to print the word with dashes for unguessed letters
def print_word():
    for letter in secret_word:
        if letter in guessed_letters:
            print(letter, end=' ')
        else:
            print('_', end=' ')
    print()

# Define the main game loop
def main():
    print("Welcome to the Guessing Game!")
    print("The secret word has", len(secret_word), "letters.")
    
    # Keep looping until the word is guessed or the player gives up
    while True:
        print_word()
        guess = input("Guess a letter: ").lower()
        
        # Check if the letter has already been guessed
        if guess in guessed_letters:
            print("You already guessed that letter. Try again.")
        else:
            guessed_letters.append(guess)
            # Check if the letter is in the secret word
            if guess in secret_word:
                print("Good guess!")
                # Check if all the letters have been guessed
                if set(guessed_letters) == set(secret_word):
                    print_word()
                    print("Congratulations! You guessed the word.")
                    break
            else:
                print("Sorry, that letter is not in the word.")
        
        # Check if the player wants to give up
        give_up = input("Enter 'give up' to show the word or press Enter to continue: ")
        if give_up == 'give up':
            print("The word was:", secret_word)
            break

# Call the main function to start the game
if __name__ == '__main__':
    main()
