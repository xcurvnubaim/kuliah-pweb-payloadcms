import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      defaultValue: 'user',
    }
  ],
}

export default Users
