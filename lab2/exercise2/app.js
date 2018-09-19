var calc = require('./calculator');
var comp = require('./comparer');

n1 = 10;
n2 = 5;

if (comp.AreNumberEqual(n1,n2) == true)
    calc.Add(n1,n2);
else if (comp.AreNumberEqual(n1,n2) == false)
    calc.Sub(n1,n2);

comp.AreNumberEqual(n1,n2) ? calc.Add(n1,n2) : calc.Sub(n1,n2)
