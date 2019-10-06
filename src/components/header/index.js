import React from 'react';
import {Container, Top, Logo, Title} from './style';

import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Header(){


    return (
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>
                    Wagner Guilherme
                </Title>

            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF"/>


        </Container>

    );
}