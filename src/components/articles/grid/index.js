import styled from 'styled-components';
import React, { Component } from 'react';
import ReactMDArticle from '../../article';

import { MDGridArticles } from './style';

class ReactMDGridArticles extends Component {
    render() {
        return (
            <MDGridArticles>
                {
                    this.props.articles.map((article, key) => (
                        <ReactMDArticle
                            key={key}
                            grid={true}
                            onClick={article.onClick}
                            borderColor={article.borderColor}
                            title={article.title}
                            description={article.description}
                            headerIcon={article.headerIcon}
                            articleImage={article.articleImage}
                        />
                    ))
                }
            </MDGridArticles>
        );
    }
}

export default ReactMDGridArticles;
