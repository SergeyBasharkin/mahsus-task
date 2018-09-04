import React, {Component} from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import Grid from "@material-ui/core/es/Grid/Grid";
import OrderBookList from "../OrderBookList/index";


class Content extends Component {
    render() {
        return (
            <Grid
                container
                spacing="24"
                justify="center"
            >
                <Grid item xs={12} md={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                HitBTC -> Poloneix
                            </Typography>
                            <OrderBookList/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Poloneix -> HitBTC
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>)
    }
}

export default Content