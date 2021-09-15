export const RandomIdl = {
  version: "0.0.0",
  name: "basic_1",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "myAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data",
          type: "u64",
        },
      ],
    },
    {
      name: "update",
      accounts: [
        {
          name: "myAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "MyAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "data",
            type: "u64",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 300,
      name: "VideoMessage",
      msg: "error message for a video",
    },
  ],
  metadata: {
    address: "4RotXiba6Tvvh1DAvcxPhyrccN9T2zvU6T6uxTT3hi16",
  },
};
