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
      name: "heroImage",
      title: "HeroImage",
      type: "image",
      options: {
        hotspot: true,
      }
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
      name: "profilePic",
      title: "ProfilePic",
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
    // {
    //   name: "phoneNumber",
    //   title: "PhoneNumber",
    //   type: "string",
    // },
    // {
    //   name: "address",
    //   title: "Address",
    //   type: "string",
    // },
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
