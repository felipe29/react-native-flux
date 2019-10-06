import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bindActionCreators} from 'redux';
import * as cartAction from '../../store/modules/cart/action';
import {formatPrice} from '../../util/format';

import {
  Container,
  CartDetais,
  ListContainer,
  List,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ControlQuantityContainer,
  ProductQuantity,
  ProductTotal,
  ProductContainer,
  ContainerDescription,
  QuantityContainer,
  CartTotal,
  CartTotalPrice,
  ButtonFinish,
  FinalContainer,
  TextButtonFinish,
  ProductDelete,
  ProductActions,
  EmptyCart,
} from './styles';

function cart({cart, removeFromCart, updateAmount, total, navigation}) {
  function incremet(product) {
    updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      {console.tron.log(cart.length)}
      {cart.length > 0 ? (
        <CartDetais>
          <List
            data={cart}
            renderItem={({item}) => (
              <ListContainer>
                <ProductContainer>
                  <ProductImage source={{uri: item.image}} />
                  <ContainerDescription>
                    <ProductDescription numberOfLines={2}>
                      {item.title}
                    </ProductDescription>

                    <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                  </ContainerDescription>
                  <ProductDelete onPress={() => removeFromCart(item.id)}>
                    <Icon name="trash" size={30} color="#7159c1" />
                  </ProductDelete>
                </ProductContainer>
                <QuantityContainer>
                  <ControlQuantityContainer>
                    <ProductActions onPress={() => decrement(item)}>
                      <Icon name="minus-circle" size={30} color="#7159c1" />
                    </ProductActions>
                    <ProductQuantity> {item.amount}</ProductQuantity>
                    <ProductActions onPress={() => incremet(item)}>
                      <Icon name="plus-circle" size={30} color="#7159c1" />
                    </ProductActions>
                  </ControlQuantityContainer>
                  <ProductTotal>{item.subtotal}</ProductTotal>
                </QuantityContainer>
              </ListContainer>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <FinalContainer>
            <CartTotal>Total</CartTotal>
            <CartTotalPrice>{total}</CartTotalPrice>
            <ButtonFinish>
              <TextButtonFinish>Finalizar Pedido</TextButtonFinish>
            </ButtonFinish>
          </FinalContainer>
        </CartDetais>
      ) : (
        <CartDetais>
          <EmptyCart>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Icon name="shopping-cart" size={60} color="#7159c1" />
            </TouchableOpacity>
            <Text>Carrinho vazio</Text>
          </EmptyCart>
        </CartDetais>
      )}
    </Container>
  );
}
const mapDispatchToProps = dispatch => bindActionCreators(cartAction, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(prd => ({
    ...prd,
    subtotal: formatPrice(prd.amount * prd.price),
  })),

  total: formatPrice(
    state.cart.reduce(function(prevVal, elem) {
      return Number(prevVal) + Number(elem.price) * Number(elem.amount);
    }, 0),
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(cart);
