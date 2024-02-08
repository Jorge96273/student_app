import random
random_number = random.randint(1,2)
turns = 1 
pos = {1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"}
board = f"{pos[1]}|{pos[2]}|{pos[3]}\n{pos[4]}|{pos[5]}|{pos[6]}\n{pos[7]}|{pos[8]}|{pos[9]}"

while turns != 9:
    print(board)
    block = input("Your 'x', which number would you choose? ")
    pos[block] = "x"
    print()
    if pos[1 and 2 and 3] == "x" or pos[1 and 4 and 7] == "x" or pos[1 and 5 and 9] == "x" or pos[3 and 6 and 9] == "x" or pos[7 and 8 and 9] == "x" or pos[2,5,8] == "x" or [4 and 5 and 6] == "x":
        print("Human wins")
    elif pos[1,2,3] or pos[1,4,7] or pos[1,5,9] or pos[3,6,9] or pos[7,8,9] or pos[2,5,8] or [4,5,6] == "o":
        print("Computer wins")

    turns+=1
    


