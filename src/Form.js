import React from 'react'

export default function Form(props) {

    const {values, update, submit } = props

    const onChange = evt => {
        const { name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
        < div className = 'form-group inputs' >

      <label>Name

           <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.username}
            placeholder='type your name'
            maxLength='30'
          />
     </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
            placeholder='enter your e-mail'
            maxLength='30'
          />
        </label>

        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name='role' value={values.role} onChange={onChange}>
            <option value="">-- select role --</option>
            <option value="UI">User Interface</option>
            <option value="front">Front End</option>
            <option value="back">Back End</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.email || !values.name || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}

