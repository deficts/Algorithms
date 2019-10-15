from sympy.geometry import Point

def area(poligono):
    a=0
    n=len(poligono)
    for i in range(n-1):
        a+=(poligono[i].x*poligono[i+1%n].y)-(poligono[i].y*poligono[i+1%n].x)
    return float(a/2)

poligono=[Point(0,0),Point(4,0),Point(1,1),Point(0,3)]
print(area(poligono))
