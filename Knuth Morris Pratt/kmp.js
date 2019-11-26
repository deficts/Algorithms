function crearTabla(pat) {
    const tabla = [0];
    const m = pat.length;
    var len = 0;
    let i = 1;

    while (i < m) {
        if (pat[i] === pat[len]) {
            len++;
            tabla[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = tabla[len - 1];
            } else {
                tabla[i] = 0;
                i++;
            }
        }
    }
    //console.log(tabla)
    return tabla;
}

function kmp(pat, pal) {
    if (pal.length === 0) {
        return 0;
    }

    const tabla = crearTabla(pat);

    var m = pat.length;
    var n = pal.length;
    let i = 0;
    let j = 0;
    var final = [];

    while (i < n) {
        //console.log("pat= "+pat[j])
        //console.log("pal= "+pal[j])
        if (pat[j] === pal[i]) {
            i++;
            j++;
        }
        if (j == m) {
            final.push(i - j);
            j = tabla[j - 1]

        } else if (i < n && pat[j] != pal[i]) {
            if (j != 0) {
                j = tabla[j - 1];

            } else {
                i++
            }
        }
    }
    return final;
}


var pat1 = document.getElementById("patron1");
var pat2 = document.getElementById("patron2");
var pat3 = document.getElementById("patron3");
