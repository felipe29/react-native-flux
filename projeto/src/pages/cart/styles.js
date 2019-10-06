import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
  flex-direction: column;
`;
export const CartDetais = styled.View`
  flex-direction: column;
  flex: 1;
  background: #fff;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ListContainer = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom-width: 1px;
  border-bottom-color: #bdbebd;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ContainerDescription = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductDescription = styled.Text`
  font-size: 12px;
  padding-left: 10px;
  padding-top: 10px;
  max-width: 80%;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  padding-left: 10px;
  padding-top: 10px;
  font-weight: bold;
`;

export const QuantityContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ControlQuantityContainer = styled.View`
  flex-direction: row;
`;
export const RemoveProductContainer = styled.View``;
export const ProductQuantity = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductActions = styled.TouchableOpacity``;

export const ProductTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const FinalContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const CartTotal = styled.Text`
  justify-content: center;
  font-size: 16px;
  color: #999999;
  font-weight: bold;
`;
export const CartTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;
export const ButtonFinish = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
  width: 100%;
  height: 42px;
  margin-top: 12px;
`;

export const TextButtonFinish = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const EmptyCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
