import React from 'react';
import {withStyles } from 'material-ui/styles';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import request from 'superagent';
import {List, ListItem} from 'material-ui/List';
import InfiniteScroll from 'react-infinite-scroller';
import Subheader from 'material-ui/Subheader';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        //width: 800,
        //height: 850,
        //overflowY: 'auto',
    },
};

class BrandsRenderer extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }
    state = {
        brandsData: [],
        result_length: 0,
        limit:100,
        hasMore: true,
    }
    page=1;
    fetchLength() {


        request
            .get('/brand_length')
            .end((err, res) => {
                if (err || !res.body) {
                    console.error("Oh no!" + err);
                    return;
                }
                this.setState({
                    result_length: res.body.length,

                });
                console.log(res.body);
            });
    }
    fetchBrands=(skip=0) => {
        console.log(skip);
        if (skip === 0) {
            this.setState({
                brandsData: [],
                hasMore: true,
            });
            this.page = 1;
            this.fetchLength();
        }

        request
            .get('/brands?index='+skip)
            .end((err, res) => {
                if (err || !res.body) {
                    console.error("Oh no!" + err);
                    return;
                }
                this.setState({
                    brandsData: this.state.brandsData.concat(res.body.result),
                    hasMore: res.body.hasMore,
                });
                console.log(res.body);
            });
    }
    componentDidMount(){
        //this.fetchLength();
        this.fetchBrands(0);

    }
    loadMoreItems = (page) => {
        this.fetchBrands(this.page * this.state.limit);
        this.page++;
    }
    render() {
        const loader = <div className="loader">Loading ...</div>;
        const rows=this.state.brandsData.map((item) => (
            <ListItem

                primaryText={item.name}
                href={item.website}


            />
        ))
        return (
            <div style={styles.root}>
                <Subheader> {this.state.result_length} brands</Subheader>


                <InfiniteScroll
                    pageStart={1}
                    loadMore={this.loadMoreItems}
                    hasMore={this.state.hasMore}
                    loader={loader}
                    threshold={600}
                    initialLoad={false}
                >
            <List>
                {rows}
    </List>
                </InfiniteScroll>
            </div>
        )
    }
}

export default withRouter( BrandsRenderer);