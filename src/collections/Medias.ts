import { CollectionConfig } from "payload/types";

const Medias: CollectionConfig = {
  slug: "medias",
  fields: [
    {
      name: "image",
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
