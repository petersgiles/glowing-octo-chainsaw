import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"

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
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "95828ec3-e4dd-5ff6-9795-364a3b6a2151",
    parent: null,
    title: "Chart Cards",
    supportingText: `<div><img src="https://www.chartjs.org/img/chartjs-logo.svg"></div>`,
    size: "2",
    cardType: CardType.Parent,
    actions: [
      { url: "https://www.chartjs.org", title: "Chart.js" },
      { url: "https://github.com/chartjs/Chart.js", title: "Github" }
    ],
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
    size: "2",
    cardType: CardType.Chart,
    actions: [],
    sortOrder: "1",
    colour: "Yellow",
    titleClass: null,
    media: null,
    data: lineChart
  },
  {
    id: "40bf9475-0d2a-58e2-a259-f17e647aeb76",
    parent: null,
    title: "Augustus Bauch V",
    supportingText: null,
    size: "2",
    cardType: CardType.Image,
    actions: [],
    sortOrder: "1",
    colour: "Grey",
    titleClass: null,
    media: { url: "https://picsum.photos/800/400/?random" },
    data: null
  },
  {
    id: "22a6e288-4ca5-5b0e-a8cd-87894346e306",
    parent: "44d51209-6da1-5068-ad2f-9c161a81ac9c",
    title: "Elroy Huels",
    supportingText:
      "Maiores non provident voluptatem neque aut sit minima. Ut omnis ut voluptatem molestias sed ut corporis suscipit ut. Repudiandae et omnis.",
    size: "3",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "4c16799f-5f88-502a-86f4-9d72ae7270a5",
    parent: "44d51209-6da1-5068-ad2f-9c161a81ac9c",
    title: "Stacey Marquardt",
    supportingText:
      "Aut velit assumenda molestias dignissimos nulla. Alias et aut pariatur consequuntur quasi fugiat. Ut rerum aliquam voluptas illum omnis aliquid sit sit ut.",
    size: "1",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "Crimson",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "fc37fba8-9beb-55a2-8359-923dd521a03a",
    parent: "44d51209-6da1-5068-ad2f-9c161a81ac9c",
    title: "Nicholaus Tremblay",
    supportingText:
      "Iusto ipsa enim libero neque aut sint. Quia et enim amet magnam eveniet doloribus. Repellendus voluptatibus voluptatem vel quas fuga rerum sed.",
    size: "4",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "f632a57d-cd5e-5985-82be-a3363f800720",
    parent: "95828ec3-e4dd-5ff6-9795-364a3b6a2151",
    title: "Pie Chart",
    supportingText: null,
    size: "2",
    cardType: CardType.Chart,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: pieChart
  },
  {
    id: "bb42d73e-6a81-54d5-bd86-7e691f19f313",
    parent: null,
    title: "Kathryn Daugherty",
    supportingText:
      "Amet fuga ut facilis distinctio enim ut laborum exercitationem earum. Sit culpa culpa soluta ad odio consequatur incidunt error dignissimos. Voluptas soluta corporis est nobis nulla quisquam molestias. Qui odio modi consequatur adipisci expedita voluptas autem.",
    size: "4",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "f0e27c4c-1b0c-5ec2-9b20-57f106902f51",
    parent: null,
    title: "Connor Prohaska",
    supportingText: null,
    size: "3",
    cardType: CardType.Parent,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "8dab4405-d2d7-5b55-835f-81068552a316",
    parent: null,
    title: "Declan Emmerich",
    supportingText:
      "Et harum veritatis aut suscipit ut et et. Consequatur dicta nam sequi. Voluptas aspernatur labore qui aliquid quo velit et.",
    size: "1",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "Crimson",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "0577fe1c-f4cf-5245-9be6-007ba3f646d6",
    parent: null,
    title: "Reina Kub",
    supportingText:
      "Ea expedita doloremque pariatur asperiores. Voluptatem quasi quae voluptatem placeat voluptas omnis deserunt. Possimus et eveniet minima enim numquam.",
    size: "4",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "bf29787a-49af-5925-bebc-a310b68c74e7",
    parent: null,
    title: "Oma Mann",
    supportingText:
      "Consequatur harum eum tempora minus rerum dolorum. Beatae fuga et voluptate ab. At ut consectetur aut et in laborum odio.",
    size: "3",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "31b68ece-20d3-5d47-abbe-953d9ea235d2",
    parent: null,
    title: "Myah Bradtke",
    supportingText:
      "Accusamus autem quidem ut reprehenderit hic distinctio quis pariatur. Nisi repellendus atque provident. Blanditiis optio maiores facilis reiciendis ipsam voluptatibus et rerum.",
    size: "3",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "Crimson",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "5e23c601-8f32-586c-b626-bd4af551cc64",
    parent: null,
    title: "Ramon Nitzsche",
    supportingText:
      "Similique architecto molestias eaque reprehenderit ea dolor. Earum iste occaecati repellat aut. Enim fugiat ratione saepe. Sint eos consequuntur totam aliquid rerum voluptatibus. Amet atque quos et delectus in.",
    size: "1",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "8ae46f28-a856-506f-bf66-1c55bfdc7131",
    parent: null,
    title: "Mrs. Mozell Jones",
    supportingText:
      "Deleniti facilis quaerat quaerat aut laudantium. Dolores odit nisi similique quaerat et. Voluptatem non impedit. Voluptatum fugiat et et ut consequatur temporibus iure illum maiores. Dignissimos illo voluptatibus ut nam ipsam rem repudiandae repellat consequatur. Consequuntur ut qui officia sed voluptatem.",
    size: "4",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "CornflowerBlue",
    titleClass: null,
    media: null,
    data: null
  },
  {
    id: "638c6f76-b225-5ff1-bef5-090a9c6932bc",
    parent: null,
    title: "Alexa Beer",
    supportingText:
      "Suscipit iusto ratione architecto qui sit. Ea quibusdam qui voluptate et qui dolorem officiis commodi animi. Impedit rerum id non vitae qui. Asperiores sit aliquam rerum placeat illum. Aperiam numquam enim officiis deleniti dignissimos repudiandae. Dolorem animi nulla veniam tempore soluta quis impedit reprehenderit.",
    size: "3",
    cardType: CardType.Standard,
    actions: [],
    sortOrder: "1",
    colour: "Crimson",
    titleClass: null,
    media: null,
    data: null
  }
]
