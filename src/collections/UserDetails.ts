import { CollectionConfig } from "payload/types";

const UserDetails: CollectionConfig = {
  slug: "userdetails",
  fields: [
    {
      name: "fullname",
      type: "text",
    },
    {
        name: "userId",
        type: "relationship",
        relationTo: "users",
    }
  ]
};

export default UserDetails;
