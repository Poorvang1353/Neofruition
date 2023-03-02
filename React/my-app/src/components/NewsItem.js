import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, discription,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img className="card-img-top" style={{objectFit:"cover",height:"30vh"}}  src={!imageUrl?"https://wallpapercave.com/dwp2x/wp1877444.jpg":imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
