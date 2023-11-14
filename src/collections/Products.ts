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
            name: 'photo',
            type: 'upload',
            relationTo: 'medias',
        },
        {
            name: 'userId',
            type: 'relationship',
            relationTo: 'userdetails',
            
        }
    ],
    hooks: {
        beforeChange: [
            ({ req, operation, data }) => {
              if (operation === 'create') {
                if (req.user) {
                    console.log(req.user);
                  data.userId = req.user.id;
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