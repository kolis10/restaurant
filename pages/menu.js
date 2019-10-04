import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "../components/nav";
import { Food } from "../components/food";
import fetch from "isomorphic-unfetch";
import "./styles.css";
import uuid4 from "uuid4";

function Menu(props) {
    const [orderItems, setOrderItems] = useState ([])

function handleNewOrderItem(orderItem) {
    const index=orderItems.findIndex(item => item.uuid===orderItem.uuid)
    if (index >= 0) {
        orderItems[index].count=orderItems[index].count+1
        setOrderItems([...orderItems])
    } else {
        setOrderItems([...orderItems, {...orderItem, count: 1}])
    }
}

async function handleFinish(){
    const payload={
        "collection": "orders",
        "data": {
                "uuid": uuid4(),
                "items": orderItems
            }
    }


    await fetch('https://api.codexsw.dev/api/upsert', {
        method: 'post',
        body: JSON.stringify(payload),
         headers: {
            'Content-Type': 'application/json'
        }
    })
    setOrderItems([])
}

  return (
    <div>
      <Navigation />
      <Food menuitems={props.menuitems} onOrderAdd={handleNewOrderItem} orderItems={orderItems} onFinish={handleFinish}/>
    </div>
  );
}

Menu.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.codexsw.dev/api/list?collection=menuitems')
  return await res.json()

}

export default Menu