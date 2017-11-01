import React from 'react';
import {withStyles } from 'material-ui/styles';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import request from 'superagent';
import {GridList, GridTile} from 'material-ui/GridList';


const styles = {
    card: {
        //maxWidth: 800,
    },
    media: {
        height: 200,
        width: 200
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    }
};
// const tilesData =
//     {
//
//         "designer": "MAC",
//         "name": "Snow Ball Face Bag Collection",
//         "url": "https://shop.nordstrom.com/s/mac-snow-ball-face-bag-collection-nordstrom-exclusive-85-value/4734445?origin=category-personalizedsort",
//         "price": "$49.50",
//         "image_urls": [
//             "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_101849119.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080",
//             "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_101908304.jpg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=704&h=1080"
//
//         ],
//         "details": "Details & Care What it is: A collection of products that work together to make you the queen of showstopping luminosity.Who it's for: All skin types.What it does: Snowflake-embossed Extra Dimension Skinfinish glazes your cheeks and décolletage, brightens eyes and gleams in all the right place, while a rose gold-handled brush and sequined stunner of a bag complete your kit.Gold collection includes:- Extra Dimension Skinfinish in Whisper of Gilt (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagPeach collection includes:- Extra Dimension Skinfinish in Show Gold (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagDermatologist tested; ophthalmologist testedNonacnegenicItem #5438794Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
//         "description": ""
//     };


class  CardExampleWithAvatar extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }
    state={
        tilesData:{},
        isGalleryOpen:true,
        main_display:'',
        grid_images:[]
    }

    setMutipleImages(){
        var product=this.state.tilesData;
        console.log(product);
        if(product.image_urls.length >1){
            this.setState({
                main_display:product.image_urls[0],
                grid_images:product.image_urls
            //hasMore: res.body.has_more,
        })
        }

        else{
            this.setState({
                main_display:product.image_urls,
                isGalleryOpen:false
            })
            }

    }
    componentWillMount(){
        const prodId = this.props.match.params.appId;

        request.get('/products/'+prodId).end((err, res) => {
            if (err || !res.body) {
                console.error("Oh no!" + err);
                return;
            }
            else{
                console.log(res.body);
                this.setState({

                    tilesData:res.body.result
                    //hasMore: res.body.has_more,
                });
                this.setMutipleImages();
            }

        })
    }
    // componentDidMount(){
    //     const prodId = this.props.match.params.appId;
    //
    //     request.get('/products/'+prodId).end((err, res) => {
    //         if (err || !res.body) {
    //             console.error("Oh no!" + err);
    //             return;
    //         }
    //         else{
    //             console.log(res.body);
    //             this.setState({
    //
    //                 tilesData:res.body.result
    //                 //hasMore: res.body.has_more,
    //             });
    //             this.setMutipleImages();
    //         }
    //
    //     })
    //
    // }


    render() {

        return (
            <div>
            <Card style={styles.card}>
                {/*<CardHeader*/}
                {/*title="URL Avatar"*/}
                {/*subtitle="Subtitle"*/}

                {/*/>*/}
                <CardMedia style={styles.media}
                    // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src={this.state.main_display} alt="product_image"/>
                </CardMedia>
                <CardTitle title={this.state.tilesData.name} subtitle={"price:" + this.state.tilesData.price}/>
                <CardText>
                    <strong>Color:</strong> {JSON.stringify(this.state.tilesData.color)} <br/>
                    <strong>Designer:</strong> {this.state.tilesData.designer} <br/>
                    <strong>Description :</strong> {this.state.tilesData.description}<br/>
                    <strong>Details:</strong>{this.state.tilesData.details}
                </CardText>
                <CardActions>
                    <a href={this.state.tilesData.url} target="_blank">
                        <FlatButton label="Visit Product Page"/></a>
                </CardActions>
            </Card>
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>

                        {this.state.grid_images.map((tile) => (

                            <GridTile

                            >
                                <img src={tile} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </div>

                )
    }
}


export default withRouter( CardExampleWithAvatar);