# react-md-article
### A react component inspired by google material design.
![](https://i.imgur.com/G4Fu6z2.gif)

## Install
```bash
$ npm install react-md-article --save-dev
```

## Usage

### ReactMDArticle
Stand-alone article component
```javascript
import React, { Component } from 'react';
import { ReactMDArticle } from 'react-md-article';

const article = {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/logo_material_2x_web_64dp.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/material_design.max-800x400.jpegquality-90.jpg'
};

class App extends Component {
  render() {
    const { title, description, headerIcon, articleImage } = article;
    return (
      <ReactMDArticle
        title={title}
        description={description}
        headerIcon={headerIcon}
        articleImage={articleImage}
        onClick={(e) => console.log('Pressed!')}
      />
    );
  }
}
```

### ReactMDResponsiveArticles

Array based articles (see the first two articles on demo)
```javascript
import React, { Component } from 'react';
import { ReactMDResponsiveArticles } from 'react-md-article';

const responsiveArticles = [
  {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/logo_material_2x_web_64dp.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/material_design.max-800x400.jpegquality-90.jpg',
    onClick: (e) => console.log('Pressed!')
  },
  {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    borderColor: '#FF5252',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/logo_google_fonts_color_2x_web_64dp.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/fonts.max-800x400.jpegquality-90.jpg',
    onClick: (e) => console.log('Pressed!')
  }
];

class App extends Component {
  render() {
    return (
      <ReactMDResponsiveArticles articles={responsiveArticles} />
    );
  }
}
```

### ReactMDGridArticles

Array based articles (see the 3 column articles on demo)
```javascript
import React, { Component } from 'react';
import { ReactMDGridArticles } from 'react-md-article';

const gridArticles = [
  {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    borderColor: '#009DE8',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/Avata_90x90.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/Hero-Image.max-400x200.jpegquality-90.png',
    onClick: (e) => console.log('Pressed!')
  },
  {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    borderColor: '#884f21',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/logo_cardboard_color_2x_web_64dp.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/cardboard.max-400x200.jpegquality-90.jpg',
    onClick: (e) => console.log('Pressed!')
  },
  {
    title: 'Loren Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    borderColor: '#ffa000',
    headerIcon: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/logo_firebase_color_2x_web_64dp.png',
    articleImage: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/firebase.max-400x200.jpegquality-90.jpg',
    onClick: (e) => console.log('Pressed!')
  }
];

class App extends Component {
  render() {
    return (
      <ReactMDGridArticles articles={gridArticles} />
    );
  }
}
```

## Properties

| Property     | Description                                           | Type      |
| ------------ | ----------------------------------------------------- | --------- |
| title        | Title of the article                                  | string    |
| description  | Description will be under the title                   | string    |
| headerIcon   | Image that is beside the title                        | url/bytes |
| articleImage | Hero image of the article                             | url/bytes |
| onClick      | Function triggered when article is clicked            | function  |
| borderColor  | The color of the border on top of the title           | string    |
| responsive   | The first two articles at the top see demo at the top | boolean   |
| grid         | The 3 column articles displayed on demo at the top    | boolean   |


### Credits
[Material Components Web](https://github.com/material-components/material-components-web)
<br/>
[Style Components](https://github.com/styled-components/styled-components)

### License
[MIT](https://github.com/jameelsocorro/react-md-article/blob/master/LICENSE)
