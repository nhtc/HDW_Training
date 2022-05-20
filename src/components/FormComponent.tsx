import React, { useState } from "react"
import "../css/Form.css"
import { IState as Props } from "../App"

interface IProps {
	people: Props["people"]
	update: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const Form = ({ people, update }: IProps) => {
	const [input, setInput] = useState({ name: "", age: "", bio: "" })
	const handleOnChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		update([
			...people,
			{
				name: input.name,
				age: Number(input.age),
				bio: input.bio,
			},
		])
		setInput({ name: "", age: "", bio: "" })
	}
	return (
		<div className='form-container'>
			<h1>Form</h1>
			<form onSubmit={handleSubmit} className='form'>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Name'
					onChange={handleOnChange}
					value={input.name}
					className='form-element'
				/>
				<input
					type='number'
					name='age'
					id='age'
					placeholder='Age'
					onChange={handleOnChange}
					value={input.age}
					className='form-element'
				/>
				<textarea
					name='bio'
					id='bio'
					placeholder='Bio Description'
					onChange={handleOnChange}
					value={input.bio}
					className='form-element'
				></textarea>
				<button
					type='submit'
					className='form-element'
					disabled={
						input.name === "" ||
						input.age === "" ||
						input.bio === ""
					}
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Form
