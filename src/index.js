import Routes from './routes';
import React from 'react'
import { StatusBar } from 'react-native'

export default function App() {
    return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#8B10AE'/>
    <Routes/>
    </>
    );

}