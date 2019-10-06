import styled from 'styled-components/native'; //allows the programmer to use CSS style syntaxe

export const Container = styled.View`
    height: 100px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({ //permite acessar atributos do componente
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

//background: rgba(255, 255, 255, 0.2); -> fundo branco com opacidade de 20%
export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF
`;