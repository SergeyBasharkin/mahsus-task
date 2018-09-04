import React, {Component} from "react"
import List from "@material-ui/core/es/List/List";
import ListSubheader from "@material-ui/core/es/ListSubheader/ListSubheader";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import SocketClient from "../../service/HitBTC/index";

class OrderBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBooks: [],
            param: []
        };
    }

    componentDidMount () {
        this.ws = new SocketClient(this.onReceive);
        this.ws.fetch()
    }

    onReceive(param){
        console.log("REFSDSD");
        this.setState(prevState => ({
            param: param
        }))
    }
    render() {
        const param = this.state.param;
        return (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Buy</TableCell>
                            <TableCell>Sold</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {param.map(order => {
                            return (
                                <TableRow key={order.sequence}>
                                    <TableCell component="th" scope="row">
                                        {order.symbol}
                                    </TableCell>
                                    <TableCell numeric>{Math.max.apply(Math, order.ask.map(function(o) { return o.price; }))}</TableCell>
                                    <TableCell numeric>{Math.min.apply(Math, order.bid.map(function(o) { return o.price; }))}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
        )
    }
}

export default OrderBookList;