f=open('cloroplastos.dat','r')
if f.mode == 'r':
    content = f.read()
content= ''.join(i for i in content if not i.isdigit())
content=content.replace('\n','')
content=content.replace(' ','')
print(content)
