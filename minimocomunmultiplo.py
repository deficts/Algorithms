def mcd(a,b):
    if(b==0):
        return a
    else:
        return mcd(b,a%b)

def mcm(a,b):
    return a*b/mcd(a,b)


print(mcm(8,40))
