import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import config from "../config/config.json";
import { Base, Typography } from '../styles';
import productModel from "../models/products.ts";

function StockList({products, setProducts}) {
  useEffect(async () => {
    setProducts(await productModel.getProducts());
  }, []);

  const list = products.map((product, index) => <Text style={styles.text} key={index}>{ product.name } - { product.stock }</Text>);
    return (
        <View>
            {list}
        </View>
    );
}

export default function Stock({products, setProducts}) {
  return (
    <View>
      <Text style={styles.header}>Lagerförteckning</Text>
      <StockList products={products} setProducts={setProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
    header: Typography.header3,
    text: Typography.normal,
});
