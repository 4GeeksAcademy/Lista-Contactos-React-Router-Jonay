const getState = ({ getStore, getActions, setStore }) => { //getStore(), getActions(), setStore() SON FUNCIONES
	return {
		store: { // EN STORE se guardan todos los estadoS GLOBALES
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [{}]
		},
		actions: { // EN ACTIONS SE GUARDAN TODAS LAS FUNCIONES GLOBALES
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
				   fetch().then().then()(data => setStore({ "foo": data.bar }))
				*/
			},
			createContact: function (contact) {
				fetch('https://playground.4geeks.com/apis/fake/contact/',{
				headers: {
					"Content-Type": "application/json"
				},
				body: {
					"full_name": "Dave Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "jonay",
					"address":"47568 NW 34ST, 33434 FL, USA",
					"phone":"7864445566"
				}
			})
				.then((response)=>response.json())
				.then((data)=>setStore({contacts: data}))
				.catch((error)=>console.log(error))
			},

			getAllContacts: function () {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/jonay')
				.then((response)=>response.json())
				.then((data)=>setStore({contacts: data}))
				.catch((error)=>console.log(error))
			},
			////// -------------Esta funcion elimina una position del Array por su indice----------------------////
			// function deletecontact(position) {
			// 	const arrayfiltered = agenda.filter((item, index) => index !== position)
			// 	setAgenda(arrayfiltered)
			// 	putTask(arrayfiltered);
			// 	}
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
