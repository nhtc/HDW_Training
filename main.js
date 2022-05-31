console.log(window.Redux)
const { createStore } = window.Redux
const initialState = ["Listen to music"]
const hobbyReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_HOBBY": {
			const newList = [...state]
			newList.push(action.payload)
			return newList
		}
		default:
			return state
	}
	return state
}
const store = createStore(hobbyReducer)

const renderHobbyList = hobbyList => {
	if (!Array.isArray(hobbyList) || hobbyList.length === 0) return
	const ulElement = document.querySelector("#myHobby")
	if (!ulElement) return
	ulElement.innerHTML = ""
	for (const hobby of hobbyList) {
		const liElement = document.createElement("li")
		liElement.textContent = hobby
		ulElement.appendChild(liElement)
	}
}
//Render

const initialHobbyList = store.getState()
console.log(initialHobbyList)
renderHobbyList(initialHobbyList)

//Form

const hobbyFormElement = document.querySelector("#hobbyForm")
if (hobbyFormElement) {
	const handleSubmit = e => {
		e.preventDefault()
		const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId")
		if (!hobbyFormElement) return

		const action = {
			type: "ADD_HOBBY",
			payload: hobbyTextElement.value,
		}
		store.dispatch(action)
		//hobbyTextElement.value = ""
		hobbyFormElement.reset()
	}
	hobbyFormElement.addEventListener("submit", handleSubmit)
}
store.subscribe(() => {
	console.log("STATE UPDATE", store.getState())
	const newHobbyList = store.getState()
	renderHobbyList(newHobbyList)
})
