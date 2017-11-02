import '@material/typography/mdc-typography.scss';

import React, { Component } from 'react';
import Typography from '@react-mdc/typography';

import {
    MDArticle,
    MDArticleContent,
    MDArticleBorder,
    MDArticleHeader,
    MDArticleHeaderIcon,
    MDArticleHeaderTitle,
    MDArticleDescription,
    MDArticleImage,
    MDArticleResponsive,
    MDArticleContentResponsive,
    MDArticleImageResponsive,
    MDGridArticle
} from './style';

class ReactMDArticle extends Component {
    constructor(props) {
        super(props)
        this.state = { shadow: 0 }
    }

    onMouseEnterHandler() {
        this.setState({ shadow: 3 });
    }

    onMouseLeaveHandler() {
        this.setState({ shadow: 0 });
    }

    onMouseClickHandler(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    renderContent() {
        return (
            <div>
                <MDArticleBorder borderColor={this.props.borderColor} />
                <MDArticleHeader>
                    <Typography>
                        <MDArticleHeaderTitle>
                            {this.props.title}
                        </MDArticleHeaderTitle>
                    </Typography>
                    <MDArticleHeaderIcon headerIcon={this.props.headerIcon} />
                </MDArticleHeader>
                <MDArticleDescription>
                    {this.props.description}
                </MDArticleDescription>
            </div>
        );
    }

    renderResponsiveArticle() {
        return (
            <MDArticleResponsive
                onClick={this.onMouseClickHandler.bind(this)}
                onMouseEnter={this.onMouseEnterHandler.bind(this)}
                onMouseLeave={this.onMouseLeaveHandler.bind(this)}
                zSpace={this.state.shadow}>
                <MDArticleContentResponsive>
                    {this.renderContent()}
                </MDArticleContentResponsive>
                <MDArticleImageResponsive articleImage={this.props.articleImage}>
                    <img src={this.props.articleImage} style={{visibility: 'hidden'}} width='100%' />
                </MDArticleImageResponsive>
            </MDArticleResponsive>
        );
    }

    renderArticle() {
        return (
            <MDArticle
                onClick={this.onMouseClickHandler.bind(this)}
                onMouseEnter={this.onMouseEnterHandler.bind(this)}
                onMouseLeave={this.onMouseLeaveHandler.bind(this)}
                zSpace={this.state.shadow}>
                {this.renderArticleBody()}
            </MDArticle>
        );
    }

    renderGridArticle() {
        return (
            <MDGridArticle
                onClick={this.onMouseClickHandler.bind(this)}
                onMouseEnter={this.onMouseEnterHandler.bind(this)}
                onMouseLeave={this.onMouseLeaveHandler.bind(this)}
                zSpace={this.state.shadow}>
                {this.renderArticleBody()}
            </MDGridArticle>
        );
    }

    renderArticleBody() {
        return (
            <div>
                <MDArticleContent>
                    {this.renderContent()}
                </MDArticleContent>
                <MDArticleImage articleImage={this.props.articleImage}>
                    <img src={this.props.articleImage} style={{visibility: 'hidden'}} width='100%' />
                </MDArticleImage>
            </div>
        );
    }

    render() {
        if (this.props.responsive) {
            return this.renderResponsiveArticle();
        }

        if (this.props.grid) {
            return this.renderGridArticle();
        }

        return this.renderArticle();
    }
}

export default ReactMDArticle;
