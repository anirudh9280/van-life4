import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host"

    async function loginUser(creds) {
        const res = await fetch("/api/login",
            { method: "post", body: JSON.stringify(creds) }
        )
        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message,
                statusText: res.statusText,
                status: res.status
            }
        }

        return data
    }

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, {replace: true})

            }).catch(err => {setError(err)}).finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <h3 className="login-first">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-first">{error.message}</h3>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>{status === "submitting" ? "Logging in .." : "Log in"}</button>
            </form>
        </div>
    )

}