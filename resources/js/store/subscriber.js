import store from './index'

store.subscribe(mutation => {
    switch (mutation.type) {
        case 'login/SET_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload
                localStorage.setItem('token', mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            break

        case 'login/SET_USER':
            if (mutation.payload) {
                localStorage.setItem('user', JSON.stringify(mutation.payload))
            } else {
                localStorage.removeItem('user')
            }
            break
        case 'customerLogin/SET_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload
                localStorage.setItem('customer_token', mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('customer_token')
            }
            break

        case 'customerLogin/SET_USER':
            if (mutation.payload) {
                localStorage.setItem('customer', JSON.stringify(mutation.payload))
            } else {
                localStorage.removeItem('customer')
            }
            break
    }
})
