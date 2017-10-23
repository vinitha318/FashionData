import React from 'react';
import {withStyles } from 'material-ui/styles';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    card: {
        maxWidth: 800,
    },
    media: {
        height: 200,
        width: 200
    },
};
const tilesData =
    {

        "designer": "MAC",
        "name": "Snow Ball Face Bag Collection",
        "url": "https://shop.nordstrom.com/s/mac-snow-ball-face-bag-collection-nordstrom-exclusive-85-value/4734445?origin=category-personalizedsort",
        "price": "$49.50",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_101849119.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A collection of products that work together to make you the queen of showstopping luminosity.Who it's for: All skin types.What it does: Snowflake-embossed Extra Dimension Skinfinish glazes your cheeks and décolletage, brightens eyes and gleams in all the right place, while a rose gold-handled brush and sequined stunner of a bag complete your kit.Gold collection includes:- Extra Dimension Skinfinish in Whisper of Gilt (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagPeach collection includes:- Extra Dimension Skinfinish in Show Gold (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagDermatologist tested; ophthalmologist testedNonacnegenicItem #5438794Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "description": ""
    };
const CardExampleWithAvatar = () => (
    <Card style={styles.card}>
        {/*<CardHeader*/}
            {/*title="URL Avatar"*/}
            {/*subtitle="Subtitle"*/}

        {/*/>*/}
        <CardMedia style={styles.media}
            // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_101696694.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080" alt="" />
        </CardMedia>
        <CardTitle title="Bijou Edition Rouge Dior Couture Lipstick Refill Set" subtitle="price: $160.00" />
        <CardText>
            Details & Care What it is: A set inspired by the catwalk featuring gorgeous shades of lipstick, plus one decorative bullet sized to fit all the lipstick refills in this set.What it does: The voluptuous Rouge Dior formula provides 16 hours of comfort without drying or color streaking, in both matte and satin finishes. It includes a unique combination of lip care ingredients that target optimal comfort and lasting hold. The formula is enriched with natural hydrating mango butter. The decorative bullet comes filled with Bijou Edition Rouge Dior in 999 Matte.Shades include:- 999 Matte- 772 Classic Matte- 810 Distinct Matte- 414 Saint-Germain- 976 Daisy Plum- 897 Mysterious MatteHow to use: For flawlessly even results, apply lipstick with a lip brush, working from the center of the lips outward. For more intense color, apply the lipstick directly on lips.Made in FranceItem #5447606Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889
        </CardText>
        <CardActions>
            <a href="https://shop.nordstrom.com/s/dior-bijou-edition-rouge-dior-couture-lipstick-refill-set-210-value/4761210?origin=category-personalizedsort&fashioncolor=AVALON%20PINK" target="_blank">
                <FlatButton label="Visit Product Page" /></a>
        </CardActions>
    </Card>
);

export default CardExampleWithAvatar;