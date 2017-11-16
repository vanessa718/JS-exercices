var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

//exercice 1
var mois =['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
console.log(mois);

//excercice 2
console.log(mois[2]);

//exercice 3
console.log(mois[5]);

//exercice 4
console.log(mois[10]);

//exercice 5
mois [7] =['Août'];
console.log(mois[7]);

//exercice 6
for (var i = 0; i < mois.length; i++) {
console.log(mois[i]);
}

//exercice 8
array.push('Courgette');
console.log(array);

//exercie 9
array.splice(4, 0,'Citron');
console.log(array);

//exercice 10
array.splice (1, 1);
console.log (array);

//exercice 11
array.splice (2, 0,'Poire');
console.log (array);