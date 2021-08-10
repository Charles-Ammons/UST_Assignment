import React from 'react';
import { ScrollView, View } from 'react-native';
import NewsItem from '../components/NewsItem';
import data from '../../mock.json';
import { useState } from 'react';

const NewsScreen: React.FC<unknown> = (unknown): JSX.Element => {
    const [articles, setArticles] = useState(data.articles);
    if (articles.length <= 50) {
        return (
            <ScrollView>
                {articles.map((article) => (<View key={article.url}>
                    <NewsItem props={article} />
                </View>))}
            </ScrollView>
        )
    }
    else {
        return (
            <ScrollView>
                {articles.splice(0, 50).map((article) => (<View key={article.url}>
                    <NewsItem props={article} />
                </View>))}
            </ScrollView>
        )
    }
}

export default NewsScreen;