
var array = [];
 
for (var i = 0; i < 5; i++) {
	 array[i] = prompt('Имена пользователей',0);
}

var userName = prompt('Вводим свое имя:', '');
var flag = false;

for (var i = 0; i < array.length;  i++) {
	 if (array[i] == userName)  {
	 	flag = true;
	 	break;
	 }
}
	 if (flag){
		alert(userName + ', Вы успешно вошли' ) ;
	} else {
		alert( 'Нет таких' );
	}

 console.log(array);


