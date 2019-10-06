import {connect} from 'react-redux';

import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, ItemCount, ActionHeader} from './styles';
// import { Container } from './styles';

function Header({navigation, cartSize}) {
  return (
    <Container>
      {console.tron.log(navigation)}

      <ActionHeader onPress={() => navigation.navigate('home')}>
        <Logo />
      </ActionHeader>
      <ActionHeader onPress={() => navigation.navigate('cart')}>
        <>
          <Icon name="shopping-basket" color="#FFF" size={30} />
          <ItemCount>{cartSize}</ItemCount>
        </>
      </ActionHeader>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null,
)(Header);
