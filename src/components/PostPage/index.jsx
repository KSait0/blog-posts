import React from "react";
import "./index.css";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="post-page">
                <div className="post-page-header">
                    <div className="post-author">
                        <div className="author-avatar">
                            {this.props.author && this.props.author.avatar && <img src={this.props.author.avatar} alt="Аватар пользователя" />}
                        </div>
                        <div>
                            <div className="author-name">
                                {this.props.author && this.props.author.name}
                                </div>
                            <div className="author-about">
                                {this.props.author && this.props.author.about}
                                </div>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="image-container">
                        {this.props.image && <img className="card-image" src={this.props.image} alt="Изображение из публикации" />}
                    </div>
                    <div className="card-body">
                        <h4 className="post-header"><b>{this.props.title}</b></h4>
                        <div className="post-description"><span>{this.props.text}</span></div>
                        <div>
                            <span className="post-tags">{this.props.tags}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-rows">
                        <div className="like">
                            <div className="like-btn"></div>
                            <span className="like-cnt"></span>
                        </div>
                        <span className="post-date">{this.props.updated_at}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage;