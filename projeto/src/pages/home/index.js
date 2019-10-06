import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  List,
  ItemNome,
  ItemList,
  Image,
  ItemPrice,
  SubmitButton,
  TextButtonAddCart,
  ProductInfo,
  Quantity,
  ProductIcon,
  ContainerPrice,
} from './styles';
import {formatPrice} from '../../util/format';

import * as cartAction from '../../store/modules/cart/action';

// import { Container } from './styles';

class Home extends Component {
  handleAddProduct = product => {
    const {addToCart} = this.props;
    addToCart(product);
  };

  render() {
    const {amount} = this.props;
    const users = [
      {
        id: 1,
        title:
          'Tênis de Caminhada Leve Confortável se eu fosse você eu levaria o teênis 1235555dfsdfdfsdf56sdf4sdfsdfs45d44s5df4',
        price: '1000.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis de Caminhada Leve Confortável',
        price: '179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis de Caminhada Leve Confortável',
        price: '179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: '179.90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ];

    return (
      <Container>
        <List
          horizontal
          data={users}
          renderItem={({item}) => (
            <ItemList>
              <Image source={{uri: item.image}} />
              <ItemNome numberOfLines={2}>{item.title}</ItemNome>
              <ContainerPrice>
                <ItemPrice>{formatPrice(item.price)}</ItemPrice>
              </ContainerPrice>
              <SubmitButton onPress={() => this.handleAddProduct(item)}>
                <ProductInfo>
                  <ProductIcon>
                    <Icon name="shopping-cart" size={18} color="#EEE" />
                  </ProductIcon>
                  <Quantity> {amount[item.id] || 0}</Quantity>
                </ProductInfo>
                <TextButtonAddCart>Comprar</TextButtonAddCart>
              </SubmitButton>
            </ItemList>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(cartAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
