import math
def lehmer():
    m=13
    a=11
    z=1
    lst=[]
    for i in range (0,12):
        z=a*z%m
        lst.append(round(normalizar(z,m),1))
    return lst

def normalizar(res,max):
    return(res*100/max/100)

print(lehmer())
