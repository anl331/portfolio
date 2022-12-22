export default {
  name: 'userInfo',
  title: 'User Information',
  type: 'document',
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "backgroundInformation",
      title: "Background Information Paragraph 1",
      type: "string",
    },
    {
      name: "backgroundInformation2",
      title: "Background Information Paragraph 2",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "aboutPic",
      title: "About Pic",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "aboutPicMobile",
      title: "Mobile About Pic",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{
        type: "reference",
        to: {
          type: "social"
        }
      }]
    },
  ],
}
