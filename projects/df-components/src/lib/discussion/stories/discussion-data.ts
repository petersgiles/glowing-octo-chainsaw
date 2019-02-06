import { toTree } from "./array-to-tree"

export const discussionItems: any = {
  timeFormat: "dateFormat",
  activeComment: null,
  comments: [
    {
      id: "c8bfffbcd25241e09272079538d089c1",
      commitment: 20,
      text: "meat",
      created: "2018-11-28T20:36:06.878Z",
      parent: null,
      author: {
        username: "Domenica20",
        name: "Alysson Kunde",
        email: "Carroll_Bradtke33@yahoo.com",
        phone: "077.179.3639 x402"
      }
    },
    {
      id: "549e2c69631e4e40a623266b87a95de3",
      commitment: 20,
      text: "kkkkkk",
      created: "2018-11-28T21:00:32.815Z",
      parent: "c8bfffbcd25241e09272079538d089c1",
      author: {
        username: "Domenica20",
        name: "Alysson Kunde",
        email: "Carroll_Bradtke33@yahoo.com",
        phone: "077.179.3639 x402"
      }
    },
    {
      id: "a230a600cab6480b9bcc2ed54d7c4751",
      commitment: 20,
      text: "bbbbb",
      created: "2018-11-28T21:55:41.909Z",
      parent: null,
      author: {
        username: "Domenica20",
        name: "Alysson Kunde",
        email: "Carroll_Bradtke33@yahoo.com",
        phone: "077.179.3639 x402"
      }
    },
    {
      id: "afb99e51d1a74187bc9bc9bb7f903e56",
      commitment: 20,
      text: "dfghdfghdfghdfgh",
      created: "2018-12-02T21:24:18.932Z",
      parent: null,
      author: {
        username: "Domenica20",
        name: "Alysson Kunde",
        email: "Carroll_Bradtke33@yahoo.com",
        phone: "077.179.3639 x402"
      }
    }
  ],
  loading: false
}

export const discussionTree = toTree(discussionItems.comments, {
  id: "id",
  parentId: "parent",
  children: "children",
  level: "level",
  firstParentId: null
})
