import {
  CardType,
  DeckItem,
  Brief
} from "../../../../../projects/df-components/src/public_api"

const pieChart = {
  chartData: [
    {
      data: [10, 20, 30]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  chartLabels: ["Red", "Yellow", "Blue"],
  chartOptions: {
    responsive: true
  },
  chartLegend: true,
  chartType: "pie"
}

const lineChart = {
  chartData: [
    { data: [65, 90, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 90, 19, 86, 27, 90], label: "Series B" },
    { data: [18, 48, 77, 9, 100, 90, 40], label: "Series C" }
  ],
  chartLabels: ["January", "February", "March", "April", "May", "June", "July"],
  chartOptions: {
    responsive: true
  },
  chartLegend: true,
  chartType: "line",
  chartColors: [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ]
}

export const cards: DeckItem[] = [
  {
    id: "d7a0ddc4-3d52-5a47-a5b7-af420fe094bb",
    parent: null,
    title: "Standard Card",
    supportingText: `<p>Bacon ipsum dolor amet spare ribs frankfurter rump, shank picanha pancetta pig doner pork loin ham.  Pork chop swine t-bone, chuck capicola biltong pancetta alcatra corned beef porchetta.  Fatback chicken frankfurter tongue strip steak bacon ball tip kielbasa drumstick.  Brisket cupim alcatra buffalo ham kielbasa tenderloin jerky beef ribs cow drumstick meatloaf.</p><p>Boudin ground round salami meatloaf doner.  Ham hock meatball swine salami venison pastrami shoulder ground round chicken pork belly pork ribeye short ribs jowl.  Swine filet mignon venison jowl t-bone.  Burgdoggen meatloaf landjaeger biltong, chuck salami strip steak ground round shoulder tongue.  Chicken pork loin buffalo drumstick spare ribs salami shank.  Short loin prosciutto tail pig turkey, ground round bacon flank swine burgdoggen.</p>`,
    size: "4",
    cardType: CardType.Standard,
    actions: [
      { url: "http://vm-dev-lbs13/SitePages/index.aspx/brief|Go", title: "Go" }
    ],
    sortOrder: "4",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "9898ad09-4434-4484-b04b-a47b065186fd",
    parent: null,
    title: "Red Book",
    supportingText: `<p>Bacon ipsum dolor amet spare ribs frankfurter rump, shank picanha pancetta pig doner pork loin ham.  Pork chop swine t-bone, chuck capicola biltong pancetta alcatra corned beef porchetta.  Fatback chicken frankfurter tongue strip steak bacon ball tip kielbasa drumstick.  Brisket cupim alcatra buffalo ham kielbasa tenderloin jerky beef ribs cow drumstick meatloaf.</p><p>Boudin ground round salami meatloaf doner.  Ham hock meatball swine salami venison pastrami shoulder ground round chicken pork belly pork ribeye short ribs jowl.  Swine filet mignon venison jowl t-bone.  Burgdoggen meatloaf landjaeger biltong, chuck salami strip steak ground round shoulder tongue.  Chicken pork loin buffalo drumstick spare ribs salami shank.  Short loin prosciutto tail pig turkey, ground round bacon flank swine burgdoggen.</p>`,
    size: "4",
    cardType: CardType.Parent,
    actions: [],
    sortOrder: "1",
    colour: "DarkRed",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "95828ec3-e4dd-5ff6-9795-364a3b6a2151",
    parent: null,
    title: "Chart Cards",
    supportingText: `<div><img src="https://www.chartjs.org/img/chartjs-logo.svg"></div>`,
    size: "4",
    cardType: CardType.Parent,
    actions: [{ url: "https://www.chartjs.org", title: "Go" }],
    sortOrder: "1",
    colour: "Crimson",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "65cd3959-46a4-5985-abfb-1cfcce9d09a2",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a2151",
    title: "Line Chart",
    supportingText: "cheese",
    size: "4",
    cardType: CardType.Chart,
    actions: [],
    sortOrder: "1",
    colour: "Yellow",
    titleClass: null,
    media: null,
    data: lineChart
  },
  {
    id: "f632a57d-cd5e-5985-82be-a3363f800720",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a2151",
    title: "Pie Chart",
    supportingText: null,
    size: "4",
    cardType: CardType.Chart,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: pieChart
  },
  {
    id: "95828ec3-e4dd-5ff6-9795-364a3b6a215a",
    parent: null,
    title: "Media",
    supportingText: `Media controls`,
    size: "4",
    cardType: CardType.Parent,
    actions: null,
    sortOrder: "1",
    colour: "DarkSlateGrey",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "95828ec3-e4dd-5ff6-9795-364a3b6a215b",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a215a",
    title: "Audio",
    supportingText: `You should hear a horse`,
    size: "4",
    cardType: CardType.Audio,
    actions: null,
    sortOrder: "1",
    colour: "GoldenRod",
    titleClass: null,
    media: {
      url: "https://www.w3schools.com/tags/horse.mp3",
      type: "audio/mpeg"
    },
    data: null
  },
  {
    id: "40bf9475-0d2a-58e2-a259-f17e647aeb76",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a215a",
    title: "Image Card",
    supportingText: null,
    size: "4",
    cardType: CardType.Image,
    actions: [],
    sortOrder: "99",
    colour: "GoldenRod",
    titleClass: null,
    media: { url: "https://picsum.photos/1200/400/?random" },
    data: null
  },
  {
    id: "95828ec3-e4dd-5ff6-9795-364a3b6a215v",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a215a",
    title: "Video",
    supportingText: null,
    size: "4",
    cardType: CardType.Video,
    actions: null,
    sortOrder: "3",
    colour: "GoldenRod",
    titleClass: null,
    media: {
      url: "https://www.w3schools.com/html/movie.mp4",
      type: "video/mp4"
    },
    data: null
  },
  {
    id: "1",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "Secretary's Statement",
    cardType: CardType.Standard,
    supportingText:
      '<div class="ExternalClassA03244D9510C4E8D9CF13379104760ED"><br><table cellspacing="0" width="100%" class="ms-rteTable-default"><tbody><tr class="ms-rteTableEvenRow-default"><td class="ms-rteTableEvenCol-default" style="width&#58;6%;">​​<img src="https://placekitten.com/200/300" alt="Edu secretary.jpg" style="margin&#58;5px;width&#58;167px;" />​​<br></td><td class="ms-rteTableOddCol-default" style="width&#58;50%;"><span style="color&#58;#444444;">​<span style="font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;background-color&#58;#ffffff;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.&#160;<br></span><br style=""><span style="">​</span><span style="font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;">​Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella</span><span style="">​</span><br style=""><span style="">​</span><br style=""><span style="font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.&#160;<br></span><br style=""><span style="">​</span><span style="font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;">​Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella</span><span style="">​</span><br style=""><div style="text-align&#58;start;"><br></div><span style="">​</span><span style="font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;">​Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella</span><span style="">​​</span><br></span></td></tr></tbody></table><p><br></p></div>',
    size: "12",
    sortOrder: "1",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: []
  },
  {
    id: "2",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "All Commitments",
    cardType: CardType.Newtab,
    supportingText:
      '<div class="ExternalClass43F211329B794B0486461A5F9E2DEDBB"><p style="text-align&#58;center;"><span style="color&#58;#444444;"><span><strong>Coming Soon.</strong></span></span></p><p><span style="color&#58;#444444;"><span>​Introduces the Commitments and Delivery Module, where commitmnets can be filtered/searched and depicted on a map where relevant.&#160;</span><br></span></p></div>',
    size: "6",
    sortOrder: "2",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "https://collab-unclassified-live.pmc.gov.au/digitalfirstinfo/SitePages/index.aspx/brief/6",
        title: "Coming Soon"
      }
    ]
  },
  {
    id: "3",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "About your portfolio",
    cardType: CardType.Standard,
    supportingText: null,
    size: "6",
    sortOrder: "3",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "http://vm-dev-lbs13/sites/redigb/sites/redigb/pack4/SitePages/index.aspx/brief",
        title: "View Portfolio"
      }
    ]
  },
  {
    id: "4",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "Pack 1",
    cardType: CardType.Standard,
    supportingText:
      '<div class="ExternalClass403708C57CBD40C6A45AF3002A2C2B48"><p style="text-align&#58;center;"><span style="color&#58;#444444;"><span>​</span><strong>​Policy Briefs</strong><br><br></span></p></div>',
    size: "4",
    sortOrder: "4",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "http://vm-dev-lbs13/sites/redigb/pack1/SitePages/index.aspx/brief",
        title: "View"
      }
    ]
  },
  {
    id: "5",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "Pack 2",
    cardType: CardType.Standard,
    supportingText:
      '<div class="ExternalClass314E8698E2C1474DB21482C9A8D72BCD"><div style="text-align&#58;center;"><strong style="color&#58;#444444;">​Policy ​Briefs</strong></div></div>',
    size: "4",
    sortOrder: "5",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "http://vm-dev-lbs13/sites/redigb/pack2/SitePages/index.aspx/brief",
        title: "View"
      }
    ]
  },
  {
    id: "6",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "Pack 3",
    cardType: CardType.Standard,
    supportingText:
      '<div class="ExternalClass5F9AC8CFC7984FB4867FBC53E24BC01B"><p style="text-align&#58;center;"><span style="color&#58;#444444;"><strong>Policy Briefs</strong><br></span></p></div>',
    size: "4",
    sortOrder: "6",
    colour: "Crimson",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "http://vm-dev-lbs13/sites/redigb/pack3/SitePages/index.aspx/brief",
        title: "View"
      }
    ]
  },
  {
    id: "7",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "CHART TEST",
    cardType: CardType.Chart,
    supportingText: null,
    size: "4",
    sortOrder: "99",
    colour: "Thistle",
    titleClass: "",
    media: null,
    data: "1",
    actions: [
      {
        url: "http://vm-dev-lbs13/sites/redigb/SitePages/index.aspx/chart/1",
        title: "View Test Chart"
      }
    ]
  },
  {
    id: "8",
    parent: "9898ad09-4434-4484-b04b-a47b065186fd",
    title: "Help Guides",
    cardType: CardType.Standard,
    supportingText: null,
    size: "4",
    sortOrder: "99",
    colour: "RosyBrown",
    titleClass: "",
    media: null,
    data: null,
    actions: [
      {
        url:
          "https://collab-unclassified-live.pmc.gov.au/digitalfirstinfo/SitePages/index.aspx/brief",
        title: "View Digital First Help Guides"
      }
    ]
  }
]

export const deckItems = cards

export const cardTypes: string[] = Object.keys(CardType).map(
  ct => CardType[ct] as string
)

export const briefs: Brief[] = [
  {
    id: "21066c5a-95e5-4d02-92e7-57b51ad350f5",
    name: "Brife Summary For One"
  },
  {
    id: "5e1ce060-1e74-48a7-9847-f4698c23c0b4",
    name: "Brife Summary For Redbook"
  },
  {
    id: "30f81c55-2ad5-4874-b396-d70e4d97b2ee",
    name: "Brife Summary For Redbook 2"
  },
  {
    id: "6ea78eab-8174-487b-af86-ee5a782eddc4",
    name: "Brief History of Time"
  },
  {
    id: "ad39c0c6-4760-47c7-9efa-dfbcfd7e65c3",
    name: "A Brief History of Humankind"
  }
]
