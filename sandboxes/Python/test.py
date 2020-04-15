# Make a Board
def display_board(board): #this is a function. Not an actual board. You still need to create a board.
    print(board[7] + '|' + board[8] + '|' + board[9])
    print('-----')
    print(board[4] + '|' + board[5] + '|' + board[6])
    print('-----')
    print(board[1] + '|' + board[2] + '|' + board[3])
the_board = [' ']* 10  # The spaces are where the (board[x] will be placed) The function will add the |
display_board(the_board)
game = ' '
 
 
# User Chooses either X or O
def player_input():
    marker = ' '
    while not (marker == 'X' or marker =='O'):
        marker = input('Do you want to be X or O? ').upper()
    if marker == 'X':
        return ('X', 'O')
    else:
        return ('O', 'X')
 
# Who goes first is randomly selected
import random
def choose_first():
    first_move = random.randint(0,1)
    if first_move == 0:
        return 'Player 1'
    else:
        return 'Player 2'
 
# First move
 
#Choosing a spot on the board - function to choose a spot and place it on the board (which is a list)
def player_choice(board): #this is performing a function on the board
    position = 0
    while position not in [1,2,3,4,5,6,7,8,9]:
        position = int(input('Choose your position (1-9)'))
    return position
 
def place_marker(board, marker, position):
    board[position] = marker
 
#check if board is full
def space_check(board, position):
   
    return board[position] == ' '
 
def full_board_check(board):
    for i in range(1,10):
        if space_check(board, i):
            return False
    return True
 
#check if win condition has been met
def win_check(board,marker):
   
    return ((board[7] == marker and board[8] == marker and board[9] == marker) or # across the top
    (board[4] == marker and board[5] == marker and board[6] == marker) or # across the middle
    (board[1] == marker and board[2] == marker and board[3] == marker) or # across the bottom
    (board[7] == marker and board[4] == marker and board[1] == marker) or # down the middle
    (board[8] == marker and board[5] == marker and board[2] == marker) or # down the middle
    (board[9] == marker and board[6] == marker and board[3] == marker) or # down the right side
    (board[7] == marker and board[5] == marker and board[3] == marker) or # diagonal
    (board[9] == marker and board[5] == marker and board[1] == marker)) # diagonal
 
 
while True:
    the_board = [' ']* 10
    player1marker,player2marker = player_input()
    turn = choose_first()
    print(turn + ' will go first. ')
 
    play_game = input('Are you ready to play? Y or N ')
    if play_game.lower()[0] == 'y':
        game_on = True
    else:
        game_on = False
 
    while game_on:
        if turn == 'Player 1':
 
            display_board(the_board)
            position = player_choice(the_board)
            place_marker(the_board,player1marker,position)
            display_board(the_board)
 
#Check if the game is won?
            if win_check(the_board,player1marker):
                display_board(the_board)
                print('Congrats! ')
                game_on = False
#Check if the game is a draw? - Elif
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print('It is a tie')
                   
                else:
                    turn = 'Player 2'
   
        else:
       
            display_board(the_board)
            position = player_choice(the_board)
            place_marker(the_board,player2marker,position)
            display_board(the_board)
 
#Check if the game is won?
            if win_check(the_board,player2marker):
                display_board(the_board)
                print('Congrats! ')
                game_on = False
#Check if the game is a draw? - Elif
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print('It is a tie')
                    break
                else:
                    turn = 'Player 1'
 
         
 
#If neither the game is won and the game isn't a draw then move on to player 2's turn
# Player 2 Move - Same as player 1
 
 
 
# Do you want to play again? If yes then game on if no game off