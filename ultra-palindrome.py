tacocat = "racecars"


def palindrome_permutation(a_string):
    odds = 0
    for i in a_string:
        match_count = 0
        for j in a_string:
            if i == j:
                match_count+= 1
        if match_count%2 == 1:
            odds+=1

    if odds <= 1:
        return True
    else:
        return False

print(palindrome_permutation(tacocat))