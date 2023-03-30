"""

Program-1

"""

# name = input("Hello, What is your name? ")

# # Three different ways of doing it
# print(f"Hello, World Dear {name}")
# print("Hello, Dear "+name)
# print("Hello, Dear ", end="")
# print(name)
# print("Hello, Dear ", name)
# functions take arguments which influence their behaviour
# learn to read the documentation

# print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)

# print("hello", "world", "Dear", "Biswajit", sep='---', end='|||||')
# print("Next Line")
#A function has parameters, to customize its behaviour.
# When we specify the values of the parameter, when invoking a function , those are called
# arguments to the function. 

# parameter like end='\n  in the function definition, is specifying the default value of the parameter, in the function definition. 
# positional arguments cannot come after named arguments.
# the data type is str. it has many methods which help to work with str variables. 

# def test_function(a,b,c='zero',d='one'):
#     print(a,b,c,d,sep=" - ")

# test_function(1,2,3)
# test_function(1,2)
# test_function(1,2,3,4)
# test_function(1) gives error

# name = "    biswajit   rajaguru".strip().title()
# print(name)

# names = name.split()
# first, last = name.split()
# print(names, first, last)

# l1 = [1,2,3,4]
# v1, v2, v3, v4 = l1
# print(v1, v2, v3, v4)

# v1, v2,v3 = (1, 2, 3)
# print(v1, v2, v3)

# I guess we can do this for a collection

# x, y = int(input("x = ")), int(input("y = "))
# print(x + y)

# print(f"The value of {int(input('x = '))} + {int(input('y = '))} ")

# code starts getting complicated, a little too clever , perhaps for its own good
# any time you make me think, you are wasting my time

# float: as in the decimal point is floating wrt where it is in a text representation of the number

# x, y = float(input("x = ")), float(input("y = "))
# # round(number[, digits])
# # []: a parameter wrapped in square brackets is optional,
# # it comes with some default value, and it is ok to omit it
# print(round(x + y,2))

# wrap something with { " ' ` < 

# we can include formating information in a 
# f string with {value:formatting} for example

# print(f"{10000000000:,}")
# x, y = float(input("x = ")), float(input("y = "))
# .2f s a format(type ?) specifier which says a float with 2 decimal places
# print(f"{x/y:.2f}, {round(x/y,2)}")

# if you see four dots in the indentation , note each dot in the inmdentation statds for one space, 1 tab = 4 dots


#def hello(name = "Biswajit"):
#     print(f"Hello, Dear {name}")

# hello()
# hello("Munu")

# A python scrpt is run line by line as a script. 
# That is, if we have not defined a function before invoking it, 
# the interpreter does not know of the function, even if it is defined below

# There are three ways to solve this problem.

# 1. define the function above before calling it
# 2. define functions in a dffrent file and load/import the file/functons at the top or before using the function
# 3. wrap the script in a a main function. and invoke the main functon at the very end of the script. 
# We can keep adding to the script inside the main functon. 

def main():
    # our script
    print("Hello from main()")

def func1():
    a = 1

def func2():
    a = 1

def func3():
    a = 1

if __name__ == "__main__": # this is way to invoke main only when the function is run as a script, but not when it is loaded asa module.
    main() 

# end main
 
