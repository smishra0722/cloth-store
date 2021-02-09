import React from 'react';
import './shop-directory.styles.scss';

//Component import
import CollectionItem from '../collection-item/collection-item.component';
class ShopDirectory extends React.Component {
    constructor() {
        super();

        this.state = {
            directorySections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              ]
        }
    }

    render() {
      const {directorySections} = this.state;
        return (
            <div className='directory'>
            {
              directorySections.map(section => <CollectionItem key={section.id} {...section}/>)
            }
            </div>
        );
    }
}


export default ShopDirectory;