import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const styles = StyleSheet.create({
    quote: {
        fontSize: 18,
        fontStyle: 'italic',
        fontFamily: 'Helvetica',
        paddingBottom: 50

    }
})

const HomeScreen: React.FC<unknown> = ({ navigation }): JSX.Element => {
    const navigateNews = () => {
        navigation.navigate('News')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.quote} >The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela</Text>
            <Button title="Show News" onPress={navigateNews} />
        </View>
    )
}

export default HomeScreen;