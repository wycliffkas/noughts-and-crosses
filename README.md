# noughts-and-crosses
Games of Noughts and Crosses are played by two players on a 3x3 board. One player is Noughts and the other Crosses. The
players take turns choosing a slot to place their respective symbols in. The winner is the first player to get three of their
symbols in a row horizontally, vertically or diagonally. If all nine slots are filled and neither player has three symbols in a
row, the game is a draw.
## 1.1 Task
Abiding by the rules in 1.3, adapt the NodeJS code from 1.4 to calculate the state of a given board. The program should
accept boards using the representation in 1.2 as arguments, and should print one result per line in order.
## 1.2 Board Representation
Boards are represented as strings of length nine, corresponding to the nine slots, starting in the top left slot and counting
across each row. The character ”X” is used for Crosses, ”O” (letter O) for Noughts, and ”_” for empty slots. Please note
that tests can be any permutation-with-repetition of ”X”, ”O”, and ”_” of length nine.
## 1.3 Game Rules
• Crosses always goes first
• Players must make a move during their turn in one of the empty slots
• The game ends as soon as either player gets 3 in a row, or there are no empty slots left

## Testing
$ node index.js XXXOO____ XX_OOOX__ X_OOO_XXX XXXOXOXOO XOOOXXXXO

CROSSES_WIN

NOUGHTS_WIN

CROSSES_WIN

CROSSES_WIN

DRAW