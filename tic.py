board = [0,5,5,2,2,2,2,2,2,2]
b = [[2,2,2],[2,2,2],[2,2,2]]
def make2():
    if board[5] == 2: return 5
    #check for non corner elements
    for i in [2,4,6,8]:
        if board[i] == 2: return i
def check(n,m,o,traget):
    if board[n] * board[m] * board[o] == traget:
        if board[n] == 2: return n
        if board[m] == 2: return m
        if board[o] == 2: return o
    return False

def go(n,player):
    board[n] = player

def possWin(player):
    traget = 0
    if player == 5:
        traget = 50
    else:
        traget = 18
    
    #horizontal check
    for i in range(3):
        product = 1
        for j in range(3):
            product *= board[(i*3) + j +1]
        print(product)
        if product == traget:
            for j in range(3):
                print(board[(i*3) + j +1] == 2)
                if board[(i*3) + j +1] == 2: return (i*3) + j +1
    
    #vertical check
    for i in range(3):
        product = 1
        for j in range(3):
            product *= board[(j*3) + i +1]
        if product == traget:
            for j in range(3):
                if board[(i*3) + j +1] == 2: return (i*3) + j +1
    #diagonal check
    if board[1] * board[5] * board[9] == traget:
        if board[1] == 2:return 1
        if board[5] == 2:return 5
        if board[9] == 2:return 9
    if board[3] * board[5] * board[7] == traget:
        if board[3] == 2:return 3
        if board[5] == 2:return 5
        if board[7] == 2:return 7

def Computer(i):
    if i == 1: go(5)
    if i == 2:
        if board[5] == 2:
            go(5)
        else:
            go(1)
    if i == 3:
        if board[9] == 2:
            go(9)
        else:
            go(3)
    if i == 4:
        

def Game():
    for i in range(1,10):
        if 1 % 2 ==  0:
            Computer(i)
        else:
            go(int(input()),5)
Game()
