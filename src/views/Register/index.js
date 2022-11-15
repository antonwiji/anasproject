import React, { useState } from "react";
import axios from 'axios'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        profilename: '',
        address: ''
    })

    const [suksesRegister, setSuksesRegister] = useState(false)

    const onChangeForm = (event) => {
        const value = event.target.value
        const id = event.target.id

        setFormData(preveState => {
            return {
                ...preveState,
                [id]: value
            }
        })
    }

    const onClickRegister = () => {
        axios.post('http://159.223.57.121:8080/auth/do-register', {
            address: formData.address,
            password: formData.password,
            profileName: formData.profilename,
            username: formData.username
        }).then(() => {
            setSuksesRegister(true)
        }).catch(() => console.log('ada yang error'))
    }

    return(
        <div
            style={{
                margin: '0px auto',
                width: '500px',
                height: 'auto'
            }}
        >
        <h2>Register</h2>
        <hr />
        {suksesRegister && <h2 style={{ color : 'green'}}>Register Berhasil</h2>}
        <p>UserName : </p>
        <input id="username" placeholder="userName" value={formData.username} onChange={(e) => onChangeForm(e)}/>
        <p>Password : </p>
        <input id="password" placeholder="Password" value={formData.password} onChange={(e) => onChangeForm(e)}/>
        <p>Profile Name : </p>
        <input id="profilename" placeholder="profilename" value={formData.profilename} onChange={(e) => onChangeForm(e)}/>
        <p>address : </p>
        <input id="address" placeholder="address" value={formData.address} onChange={(e) => onChangeForm(e)}/>
        <button
        onClick={onClickRegister}
        >Register</button>
        </div>
    )
}

export default Register