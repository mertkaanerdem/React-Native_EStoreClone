import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {BasketItem} from '../components/BasketItem';

function Basket(props) {
  const basketList = useSelector((state) => state.basket);

  const renderFavorites = ({item}) => <BasketItem item={item} />;

  return (
    <View>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={basketList}
        renderItem={renderFavorites}
      />
    </View>
  );
}

export {Basket};
