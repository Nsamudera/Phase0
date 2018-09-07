function groupAnimals(animals) {
  var a = []
  var b = []
  var c = []
  var d = []
  var e = []
  var f = []
  var g = []
  var h = []
  var i = []
  var j = []
  var k = []
  var l = []
  var m = []
  var n = []
  var o = []
  var p = []
  var q = []
  var r = []
  var s = []
  var t = []
  var u = []
  var v = []
  var w = []
  var x = []
  var y = []
  var z = []
  var output = []

  // This section is to take each string within the array and categorize it based on the first letter
  for (index = 0; index < animals.length; index++) {
    if (animals[index][0] == 'a') {
      a.push(animals[index])
    } else if (animals[index][0] == 'b') {
      b.push(animals[index])
    } else if (animals[index][0] == 'c') {
      c.push(animals[index])
    } else if (animals[index][0] == 'd') {
      d.push(animals[index])
    } else if (animals[index][0] == 'e') {
      e.push(animals[index])
    } else if (animals[index][0] == 'f') {
      f.push(animals[index])
    } else if (animals[index][0] == 'g') {
      g.push(animals[index])
    } else if (animals[index][0] == 'h') {
      h.push(animals[index])
    } else if (animals[index][0] == 'i') {
      i.push(animals[index])
    } else if (animals[index][0] == 'j') {
      j.push(animals[index])
    } else if (animals[index][0] == 'k') {
      k.push(animals[index])
    } else if (animals[index][0] == 'l') {
      l.push(animals[index])
    } else if (animals[index][0] == 'm') {
      m.push(animals[index])
    } else if (animals[index][0] == 'n') {
      n.push(animals[index])
    } else if (animals[index][0] == 'o') {
      o.push(animals[index])
    } else if (animals[index][0] == 'p') {
      p.push(animals[index])
    } else if (animals[index][0] == 'q') {
      q.push(animals[index])
    } else if (animals[index][0] == 'r') {
      r.push(animals[index])
    } else if (animals[index][0] == 's') {
      s.push(animals[index])
    } else if (animals[index][0] == 't') {
      t.push(animals[index])
    } else if (animals[index][0] == 'u') {
      u.push(animals[index])
    } else if (animals[index][0] == 'v') {
      v.push(animals[index])
    } else if (animals[index][0] == 'w') {
      w.push(animals[index])
    } else if (animals[index][0] == 'x') {
      x.push(animals[index])
    } else if (animals[index][0] == 'y') {
      y.push(animals[index])
    } else if (animals[index][0] == 'z') {
      z.push(animals[index])
    }
  }

  //This section is to display the result (var 'output') only if the variable is not empty
  if (a != '') {
    output.push(a)
  } if (b != '') {
    output.push(b)
  } if (c != '') {
    output.push(c)
  } if (d != '') {
    output.push(d)
  } if (e != '') {
    output.push(e)
  } if (f != '') {
    output.push(f)
  } if (g != '') {
    output.push(g)
  } if (h != '') {
    output.push(h)
  } if (i != '') {
    output.push(i)
  } if (j != '') {
    output.push(j)
  } if (k != '') {
    output.push(k)
  } if (l != '') {
    output.push(l)
  } if (m != '') {
    output.push(m)
  } if (n != '') {
    output.push(n)
  } if (o != '') {
    output.push(o)
  } if (p != '') {
    output.push(p)
  } if (q != '') {
    output.push(q)
  } if (r != '') {
    output.push(r)
  } if (s != '') {
    output.push(s)
  } if (t != '') {
    output.push(t)
  } if (u != '') {
    output.push(u)
  } if (v != '') {
    output.push(v)
  } if (w != '') {
    output.push(w)
  } if (x != '') {
    output.push(x)
  } if (y != '') {
    output.push(y)
  } if (z != '') {
    output.push(z)
  }
  return output
}