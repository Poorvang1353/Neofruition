import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=17a7c994669c42c98d33277e479d99dd'
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    
    render() {
        return (
            <div className='mt-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row mt-4">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} discription={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
