# Initialize the board as a dictionary with keys from 1 to 9
board = {1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' ', 7: ' ', 8: ' ', 9: ' '}

# Define a function to print the board
def print_board():
    print(board[1] + '|' + board[2] + '|' + board[3])
    print('-+-+-')
    print(board[4] + '|' + board[5] + '|' + board[6])
    print('-+-+-')
    print(board[7] + '|' + board[8] + '|' + board[9])

# Define a function to check if there is a winner
def check_win(player):
    if board[1] == board[2] == board[3] == player or \
       board[4] == board[5] == board[6] == player or \
       board[7] == board[8] == board[9] == player or \
       board[1] == board[4] == board[7] == player or \
       board[2] == board[5] == board[8] == player or \
       board[3] == board[6] == board[9] == player or \
       board[1] == board[5] == board[9] == player or \
       board[3] == board[5] == board[7] == player:
        return True
    else:
        return False

# Define the main game loop
def main():
    print_board()
    current_player = 'X'
    turn = 0
    while True:
        # Get the player's move
        move = int(input(f"{current_player}, choose your move (1-9): "))
        
        # Check if the move is valid
        if board[move] == ' ':
            board[move] = current_player
            turn += 1
            print_board()
            
            # Check if the game is over
            if check_win(current_player):
                print(f"{current_player} wins!")
                break
            elif turn == 9:
                print("It's a tie!")
                break
            
            # Switch to the other player
            current_player = 'O' if current_player == 'X' else 'X'
        else:
            print("Invalid move. Please try again.")

# Call the main function to start the game
if __name__ == '__main__':
    main()
