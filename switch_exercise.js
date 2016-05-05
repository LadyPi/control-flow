if(joke.isFunny === 'yes') {
  laugh();
} else if (joke.isFunny === 'sort of'){
  chortle();
} else if (joke.isFunny === 'no') {
  stareBlankly();
}


var humor = joke.isFunny;
switch (expression) {
	case "yes":
	laugh();
	break;
	case "sort of":
	chortle();
	break;
	case "no":
	stareBlankly();
	break;
}