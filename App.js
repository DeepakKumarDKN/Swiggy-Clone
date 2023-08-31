import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './src/Component/Header'
import BodyComponent from './src/Component/Body'



const AppLayout = () => {
    return(
        <>
            <HeaderComponent/>
            <BodyComponent/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)