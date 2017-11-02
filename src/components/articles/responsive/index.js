import React, { Component } from 'react';
import ReactMDArticle from '../../article';

import { MDResponsiveArticles } from './style';

class ReactMDResponsiveArticles extends Component {
    render() {
        return (
            <MDResponsiveArticles>
                {
                    this.props.articles.map((article, key) => (
                        <ReactMDArticle
                            key={key}
                            responsive={true}
                            onClick={article.onClick}
                            borderColor={article.borderColor}
                            title={article.title}
                            description={article.description}
                            headerIcon={article.headerIcon}
                            articleImage={article.articleImage}
                        />
                    ))
                }
            </MDResponsiveArticles>
        );
    }
}

export default ReactMDResponsiveArticles;
