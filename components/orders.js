import React from "react";
import Router from "next/router"
import { Row } from "react-bootstrap";
import {Order} from "./order"

export function Orders(props) {

    async function handleFinished(order){
        const { _id, ...orderNoId } = order

        const payload={//
            "collection": "orders",//
            "data": {
                ...orderNoId,
                completed: true
            }
        }//
        await fetch('https://api.codexsw.dev/api/upsert', {//
            method: 'post',//
            body: JSON.stringify(payload),//
            headers: {//
                'Content-Type': 'application/json'//
            }//
        })
        Router.replace('/chefside')
    }//

    return (
        <Row>

                {props.orders.filter(order => !order.completed).map(order => (
                    <Order order={order} onFinished={handleFinished}/>
                ))}

        </Row>
    );
}