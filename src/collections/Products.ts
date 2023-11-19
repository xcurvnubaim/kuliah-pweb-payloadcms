import { CollectionConfig } from "payload/types";
import productsAccess from "../access/products";

const Products:CollectionConfig = {
    slug : 'products',
    fields : [
        {
            name: "name",
            type: 'text',
            required : true
        },
        {
            name: 'price',
            type: "number",
            required: true
        },
        {
            name: 'product_image',
            type: 'upload',
            relationTo: 'medias',
        },
        {
            name: 'tenant_id',
            type: 'relationship',
            relationTo: 'users',
        }
    ],
    hooks: {
        beforeChange: [
            ({ req, operation, data }) => {
              if (operation === 'create') {
                if (req.user) {
                    console.log(req.user);
                  data.tenant_id = req.user.id;
                  return data;
                }
              }
            },
        ],
    },
    access: {
        read: ()=>true,
        update: productsAccess,
        delete: productsAccess,
    }

}

export default Products