import {useEffect, useState} from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from "@/lib/axios";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const fetchUser = async () => {
        try {
            const response = await axios.get('/api/user')
            setUser(response.data)
        } catch (error) {
            if (error.response.status !== 409) throw error

            router.push('/verify-email')
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    // const { data: user, error, mutate } = useSWR('/api/user', () =>
    //     axios
    //         .get('/api/user')
    //         .then(res => res.data)
    //         .catch(error => {
    //             if (error.response.status !== 409) throw error
    //
    //             router.push('/verify-email')
    //         }),
    // )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        try {
            await axios.post('/register', props)
            fetchUser()
        } catch (error) {
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        }
        // axios
        //     .post('/register', props)
        //     .then(() => mutate())
        //     .catch(error => {
        //         if (error.response.status !== 422) throw error
        //
        //         setErrors(error.response.data.errors)
        //     })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()
        setErrors([])
        setStatus(null)

        try {
            await axios.post('/login', props)
            fetchUser()
        } catch (error) {
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
        // axios
        //     .post('/login', props)
        //     .then(() => mutate())
        //     .catch(error => {
        //         if (error.response.status !== 422) throw error
        //
        //         setErrors(error.response.data.errors)
        //     })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        try {
            const response = await axios.post('/forgot-password', { email })
            setStatus(response.data.status)
        } catch (error) {
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        }
        // axios
        //     .post('/forgot-password', { email })
        //     .then(response => setStatus(response.data.status))
        //     .catch(error => {
        //         if (error.response.status !== 422) throw error
        //
        //         setErrors(error.response.data.errors)
        //     })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        try {
            const response = await axios.post('/reset-password', { token: params.token, ...props })
            router.push('/login?reset=' + btoa(response.data.status))
        } catch (err) {
            if (err.response.status !== 422) throw err
            setErrors(err.response.data.errors)
        }
        // axios
        //     .post('/reset-password', { token: params.token, ...props })
        //     .then(response =>
        //         router.push('/login?reset=' + btoa(response.data.status)),
        //     )
        //     .catch(error => {
        //         if (error.response.status !== 422) throw error
        //
        //         setErrors(error.response.data.errors)
        //     })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios.post('/email/verification-notification')
            .then(response => setStatus(response.data.status))

        // axios
        //     .post('/email/verification-notification')
        //     .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout')
            fetchUser()
        }
        // if (!error) {
        //     await axios.post('/logout').then(() => mutate())
        // }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)

        // if (middleware === 'auth' && !user?.email_verified_at)
        //     router.push('/verify-email')

        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error, middleware, redirectIfAuthenticated])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
