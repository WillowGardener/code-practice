import math

sample_list = [1,3,5,6,7,9]

def bi_search(a_list, search):
    low = 0
    high = len(a_list)-1
    med = math.floor((low+high)/2)
    print(f'high = {high}, median = {med}, low = {low}')
    while True:
        if search == a_list[high]:
            return high
        if search == a_list[med]:
            return med
        elif search > a_list[med]:
            low = med
            med = math.floor(low+high/2)
        elif search < a_list[med]:
            high = med
            med = math.floor(low+high/2)


print(bi_search(sample_list, 1))