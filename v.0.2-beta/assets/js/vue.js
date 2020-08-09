var nav = new Vue({
  el: '#navdesk',
  data: {
    home: 'Inicio',
    about: 'Acerca de',
    portafolio: 'Portafolio',
    packages: 'Paquetes',
    map: 'Ubicacion',
    contact: 'Contacto'
  }
})
var about = new Vue({
	el: '#aboutme',
	data: {
		namesection: 'Acerca de mi trabajo'
	}
})

var portafolio = new Vue({
	el: '#portafolio',
	data: {
		title: '¿Quieres conocer mis proyectos?',
		namesection: 'Portafolio', 
		tecnologias: 'Paginas creadas con tecnologias recientes',
		sugerencias: 'Gustas dar una sugerencia?',
		contacto: 'Contactame'
	}
})

var packages = new Vue({
	el: '#price',
	data: {
		namesection: 'Precio de paquetes' 
	}
})

var end = new Vue({
	el: '#end',
	data: {
		namesection: 'Termino de la pagina' 
	}
})