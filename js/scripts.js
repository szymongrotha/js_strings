	var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
	var mod = 'Zielone słonie';
	var modUpperCase = mod.toUpperCase();
	var textReplace = text.replace('Papugi' , modUpperCase);
	var partOfText = textReplace.substr(0, 45);

	console.log(partOfText);
