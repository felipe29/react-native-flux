import styled from 'styled-components/native';

import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ItemList = styled.View`
  flex-direction: column;
  background: #fefefe;
  width: 221px;
  height: 358px;
  border-radius: 8px;
  padding: 10px;
  margin: 0 20px 30px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ContainerPrice = styled.View`
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ItemNome = styled.Text`
  font-size: 14px;
  color: #333;
  align-self: center;
  overflow: hidden;
`;

export const ItemPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
  width: 100%;
  height: 42px;
`;

export const TextButtonAddCart = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const ProductIcon = styled.View`
  margin-left: 10px;
`;
export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  height: 100%;
  padding-right: 14px;
  border-radius: 4px;
  padding: 0;
  background-color: ${darken(0.09, '#7159c1')};
`;
export const Quantity = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-top: 0px;
  margin-left: 9px;
  margin-right: 9px;
  padding: 0px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
