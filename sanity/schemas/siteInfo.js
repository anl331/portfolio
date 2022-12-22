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
      name: "heroGradient",
      title: "Hero Gradient",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "projectGradient",
      title: "Project Gradient",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "sitePattern",
      title: "Site Pattern",
      type: "image",
      options: {
        hotspot: true,
      }
    },
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
