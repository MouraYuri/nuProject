import React from 'react'
import {
    View,
    Text
} from 'react-native'

import {Container, Card, CardContent, CardFooter, CardHeader, Title,
        Description, Annotation, Content} from '../styles';
import Header from '../components/header/index';
import Tabs from '../components/tabs/index';

import Icon from 'react-native-vector-icons/MaterialIcons';


const MainScreen = () => {


    return (
        <Container>

            <Header/>


            <Content>
                <Card>
                    <CardHeader>
                         <Icon name="attach-money" size={28} color="#666"/>
                         <Icon name="visibility-off" size={28} color="#666"/>
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 12.350,00</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Transferência de R$ 20,00 recebida de Yuri Moura ontem às 18:00h
                        </Annotation>
                    </CardFooter>

                </Card>
            </Content>

            <Tabs/>

        </Container>
    )
}


export default MainScreen;