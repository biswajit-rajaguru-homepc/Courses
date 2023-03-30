
import math
import sys

operators = ['+', '-', '*', '/', '%', '^']

def main():
    # print opening display
    print_opening_display()
    
    # take input
    expression = input(": ").strip()
    
    tokens = tokenize(expression)
    #print(tokens)
    answer = calculate_postfix_expression(tokens)
    
    # print result
    print(answer)
    
    return 
    
# calculator

def tokenize(expression=""):
    #print(expression)
    
    tokens = expression.split()
    temp = []
    
    # sanitize token list for spaces and clumped tokens
    
    for token in tokens:
        temp1 = []
        token = token.strip()
        
        # if after stripping the token is an empty string skip it
        if token=="":
            continue
        
        
        while(1):
            
            # code to unclump leading '(' and ending ')'
            
            if token[0]=='(':
                temp.append('(')
                token = token[1:]
                if token=='':
                    break
            elif token[-1]==')':
                temp1.append(')')
                token = token[:-1]
                if token=='':
                    break
            else:
                break
        if token != "":
            temp.append(token)
        if temp1 != []:
            temp += temp1
    tokens = temp
    return tokens
    


def calculate_postfix_expression(tokens=[]):
    
    # parse list to find operator, arg1, arg2
    operator, arg1, arg2, errorcode = parse_string_to_op_a1_a2(tokens)
    
    # if parsing the given list fails, then exit after  printing the given list
    if (errorcode != "ok"):
        print("There is some error in the expression\n{tokens}")
        sys.exit(0)
    
    
    # if arg1-list starts with '(' then it is a nested expression
    # so evaluate it by recusively calling calculate_... to find value of arg1 
    # or else it would contain a single element , which we cast to a float
    if arg1[0]=='(':
        arg1 = calculate_postfix_expression(arg1)
    else:
        arg1 = float(arg1[0])
    
    # same as we did for arg1, we do for arg2
    
    if arg2[0]=='(':
        arg2 = calculate_postfix_expression(arg2)
    else:
        arg2 = float(arg2[0])
    
    # Now that we have the values of arg1, and arg2 we find the value of the calculation
    # by using the appropriate operator
    
    if operator == '+':
        return arg1 + arg2
    elif operator == '-':
        return arg1 - arg2
    elif operator == '/':
        return arg1 / arg2
    elif operator == '*':
        return arg1 * arg2
    elif operator == '%':
        return math.fmod(arg1,arg2)
    elif operator == '^':
        return math.pow(arg1, arg2)
    else:
        print("Error in the expression: {}\nExiting".format(tokens))
        sys.exit(0)
        
    
def parse_string_to_op_a1_a2(tokens):
    
    # print(tokens)
    operator, arg1, arg2, errorcode = "", [], [], "ok"
    if tokens[0] != '(' or tokens[1] not in operators:
        errorcode = 'not-ok'
        return operator, arg1, arg2, errorcode

    operator = tokens[1]
    depth, pos, start, end = 0, 2, 0, 0
    while(pos < len(tokens)):
        if tokens[pos] == '(':
            depth += 1
            if depth==1:
                start = pos
        if tokens[pos] == ')':
            depth -= 1
            if depth == 0:
                end = pos
                if arg1==[]:
                    arg1 = tokens[start:end+1]
                    depth, start, end = 0, 0, 0
                elif arg2==[]:
                    arg2 = tokens[start:end+1] 
                    depth, start, end = 0, 0, 0
        if tokens[pos] not in ['(',')'] and depth == 0:
            if arg1==[]:
                    arg1 = list(tokens[pos])
                    depth, start, end = 0, 0, 0
            elif arg2==[]:
                    arg2 = list(tokens[pos]) 
                    depth, start, end = 0, 0, 0
        pos += 1
    
    return operator, arg1, arg2, errorcode

def print_opening_display():
    print(f"This is a postfix calculator\n{'='*28}\n\nEnter the calculation string in the following format.\n(<operator> <value1> <value2>)\nThe value1 and value2 arguments can themselves be postfix expressions like\n(+ (* 1 2) (- 4 3))\n\n")

main()   


