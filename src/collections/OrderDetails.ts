import { CollectionConfig } from "payload/types";

const OrderDetails: CollectionConfig = {
    slug: "orderdetails",
    fields: [
        {
            name: 'quantity',
            type: 'number',
        },
        {
            name: 'order_id',
            type: 'relationship',
            relationTo: 'orders',
        },
        {
            name: 'product_id',
            type: 'relationship',
            relationTo: 'products',
        }
    ]
}