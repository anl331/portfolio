export default {
  name: 'siteInfo',
  title: 'Website Configurations',
  type: 'document',
  fields: [
    // {
    //   name: "firstName",
    //   title: "Favicon",
    //   type: "string",
    // },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: {
        hotspot: true,
      }
    },
  ],
}
