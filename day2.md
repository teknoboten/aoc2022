for each row:
calculate outcome
add value of char2

shape values
Rock A/X 1
Paper B/Y 2
Scissors C/Z 3

outcomes
loss = 0
draw = 3
win = 6

example:
A Y -> 2 + win -> 8
B X -> 1 + loss -> 1
C Z -> 3 + draw -> 6

result = 15

## part 2

for each row:
calculate which shape to play to get the desired outcome

Rock A = 1
Paper B = 2
Scissors C = 3

X Lose = 0
Y Draw = 3
Z Win = 6

A X -> 3 + 0 = 3
A Y -> 1 + 3 = 3
A Z -> 2 + 6 = 8
B X -> 1 + 0 = 1
B Y -> 2 + 3 = 5
B Z -> 3 + 6 = 9
C X -> 2 + 0 = 2
C Y -> 3 + 3 = 6
C Z -> 1 + 6 = 7

example:
A Y -> Rock (1) + Draw(3) = 4
B X -> Rock (1) + Lose(0) = 1
C Z -> Rock(1) = Win(6) = 7

result = 12
