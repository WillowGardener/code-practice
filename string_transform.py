rolodex = '''
mr jim jones
James smith
Ms Sally Smith
MRS. KRISTIN BROWN
Mister Tom Jones
'''


def string_transform(a_string):
    male_titles = ['Mister', 'Mr']
    female_titles = ['Mrs','Ms','Miss','Mrs.']


    rolodex = a_string.title()
    temp_list = rolodex.splitlines()
    rolo_list = []

    for phrase in temp_list:
        phrase_list = phrase.split()
        rolo_list.append(phrase_list)


    new_rolodex = ''

    for line in rolo_list:
        for word in line:
            if word in male_titles:
                new_rolodex += 'Mr.'
            elif word in female_titles:
                new_rolodex += 'Ms.'
            else:
                new_rolodex += word
            new_rolodex += ' '
        new_rolodex += '\n'
    
    return(new_rolodex)


print(string_transform(rolodex))
