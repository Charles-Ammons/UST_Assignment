import React from 'react';
import { Platform, StyleSheet, Text, Image, Pressable, Linking } from "react-native";

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        paddingBottom: 5,
        width: '60%'
    },
    content: {
        fontSize: 12,
        fontFamily: 'Helvetica',
        height: 100,
        width: '60%'
    },
    image: {
        height: 300,
        width: '60%',
        paddingBottom: 25
    }
})

const NewsItem: React.FC<unknown> = (props): JSX.Element => {
    const imagePath = `${props.props.urlToImage}`;
    const articlePath = `${props.props.url}`

    const goToNews = () => {
        Linking.openURL(articlePath).catch((err) => console.error(err));
    }

    return (
        <Pressable onPress={goToNews} style={styles.pressable}>
            <Text style={styles.heading}>{props.props.title}</Text>
            <Text style={styles.content}>{props.props.content}</Text>
            <Image style={styles.image} source={{ uri: imagePath }} />
        </Pressable>
    )
}

export default NewsItem;