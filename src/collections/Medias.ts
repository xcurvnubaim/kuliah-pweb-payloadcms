import { CollectionConfig } from "payload/types";

const Medias: CollectionConfig = {
  slug: "medias",
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticURL: "/uploads",
    staticDir: "./uploads",
    mimeTypes: ["image/*"],
  },
};

export default Medias;
