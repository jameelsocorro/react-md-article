import '@material/elevation/mdc-elevation.scss';
import '@material/typography/mdc-typography.scss';
import styled from 'styled-components';

import Elevation from '@react-mdc/elevation';
import Typography from '@react-mdc/typography';

const MDArticle = styled(Elevation)`
    cursor: pointer;
    padding: 32px 16px;
    max-width: 1280px;

    @media (min-width: 480px) {
        padding: 32px;
    }
`;

const MDArticleContent = styled.div``;

const MDArticleBorder = styled.div`
    border-top: 4px solid ${props => props.borderColor || 'black'};
`;

const MDArticleHeader = styled.div`
    display: flex;
    flex-direction: flex-start;
    justify-content: space-between;
    padding: 16px 0;
`;

const MDArticleHeaderIcon = styled.div`
    background-image: url(${props => props.headerIcon});
    background-size: cover;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
    height: 32px;

    @media (min-width: 1150px) {
        min-height: 44px;
        min-width: 44px;
        width: 44px;
        height: 44px;
    }
`;

const MDArticleHeaderTitle = styled(Typography.Headline)`
    margin: 0px;
    text-align: left;
`;

const MDArticleDescription = styled(Typography)`
    line-height: 24px;
    margin-bottom: 32px;
    text-align: left;
`;

const MDArticleImage = styled.div`
    background-image: url(${props => props.articleImage});
    background-size: cover;
    height: 100%;
    width: 100%;
`;

const MDArticleResponsive = styled(MDArticle)`
    @media (min-width: 480px) {
        align-items: top;
        display: flex;
    }
`;

const MDArticleContentResponsive = styled(MDArticleContent)`
    @media (min-width: 480px) {
        flex-basis: 0;
        flex-grow: 1;
        padding-right: 40px;
    }

    @media (min-width: 1150px) {
        padding-right: 72px;
    }
`;

const MDArticleImageResponsive = styled(MDArticleImage)`
    @media (min-width: 480px) {
        flex-basis: 0;
        flex-grow: 2;
    }
`;

const MDGridArticle = styled(MDArticle)`
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;

    @media (min-width: 480px) {
        width: calc(100% / 2);
        max-width: calc(100% / 2);
    }

    @media (min-width: 1150px) {
        width: calc(100% / 3);
        max-width: calc(100% / 3);
    }
`;

export {
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
};
