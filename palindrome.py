import math

def palindrome_checker(a_string):
    is_palindrome = True
    for i in range(math.ceil(len(a_string)/2)):
        if a_string[i] != a_string[-1*(i+1)]:
            is_palindrome = False
            break
    if is_palindrome == True:
        return True
    elif is_palindrome == False:
        return False

palindrome = input("enter a word: ")

print(palindrome_checker(palindrome))


