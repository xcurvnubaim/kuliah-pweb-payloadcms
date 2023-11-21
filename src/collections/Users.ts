import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 1000 * 60 * 60 * 24 * 7, // 7 days
    cookies: {
      sameSite: 'none',
      secure: true
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "fullname",
      type: "text",
    },
    {
      name: "phoneNumber",
      type: "text",
    },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'User',
          value: 'user',

        }, {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Tenant',
          value: 'tenant',
        }
      ],
      defaultValue: 'user',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'medias',
    }
  ],
}

export default Users
