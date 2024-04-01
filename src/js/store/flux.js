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
			contacts: [],
			contact: {}
			// deleteId: ""
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
			seeContact: (contact) => {
					setStore({
						contact: contact
					})
			},
			createContact: function (contact) {
				fetch('https://playground.4geeks.com/contact/agendas/jonay/contacts',{
					method: 'POST',
					headers: {
						"accept": "application/json"
					},
					body: JSON.stringify({
						"name": contact.fullName,
						"phone":contact.phone,
						"email": contact.email,
						"address":contact.address
					})

				// 	body: JSON.stringify(contact) /**---HAY varias FORMAS DE modificar añadir la info del formulario en un nuevo contacto --//
                                                        //----------ESTA ES LA SEGUNDA JUNTO AL handleSubmit de addcontact-----*///
					
				})
				.then((response)=>response.json())
				.then((data)=>{
					if (data.ok) {
						getActions().getAllContacts()
					}
				})
				.catch((error)=>console.log(error))
			},

			getAllContacts: function () {
				fetch('https://playground.4geeks.com/contact/agendas/jonay/contacts')
				.then((response)=>response.json())
				.then((data)=>setStore({contacts: data.contacts}))
				.catch((error)=>console.log(error))
			},
			deleteContact: function (id) {
				fetch(`https://playground.4geeks.com/contact/agendas/jonay/contacts/${id}`, {
				method: 'DELETE'
			})
				.then((response)=>response.json())
				.then((data)=>{console.log({contacts: data});
							   getActions().getAllContacts()})
				.catch((error)=>console.log(error))
			},
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
