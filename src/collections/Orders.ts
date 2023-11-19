import { CollectionConfig } from "payload/types";

const Orders: CollectionConfig = {
    slug: "orders",
    fields: [
        {
            name: 'dateTimeTransaction',
            type: 'date',
            defaultValue: new Date(),
        },
        {
            name: 'totalPrice',
            type: 'number',
        },
        {
            name: 'tenant_id',
            type: 'relationship',
            relationTo: 'users',
        }
    ]
}