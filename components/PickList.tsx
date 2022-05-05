import { View, Text, Button } from "react-native";
import orderModel from "../models/orders.ts";
import productModel from "../models/products";
import { Base, Typography } from '../styles';
import { useState, useEffect } from 'react';

export default function PickList({ route, navigation, setProducts }) {
    const { reload } = route.params || false;
    const { order } = route.params;
    const [productsList, setProductsLists] = useState([]);

    if (reload) {
        reloadProducts();
    }

    async function reloadProducts() {
        setProductsLists(await productModel.getProducts());
    }

    useEffect(() => {
        reloadProducts();
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await  productModel.getProducts());
        navigation.navigate("List", {reload: true});
    }

    const productsHash = productsList.reduce((hash, current) => ({...hash, [current.id]: current.stock}), {});

    let allInStock = true;

    const orderItemsList = order.order_items.map((item, index) => {
        if (productsHash[item.product_id] < item.account) {
            allInStock = false;
        }

        return <Text
                key={index}
                style={{...Typography.normal}}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    return (
        <View style={{...Base.base}}>
            <Text style={{...Typography.header2}}>{order.name}</Text>
            <Text style={{...Typography.normal}}>{order.address}</Text>
            <Text style={{...Typography.normal}}>{order.zip} {order.city}</Text>

            <Text style={{...Typography.header3}}>Produkter:</Text>

            {orderItemsList}

            {allInStock
                ?<Button color="green" title="Plocka order" onPress={pick} />
                :<Text style={{...Typography.normal}}>Ordern går inte att packa, varorna saknas.</Text>
            }
        </View>
    )
};
