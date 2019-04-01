import { CardType, DeckItem } from  '../../../../../projects/df-components/src/public_api';

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
    sortOrder: "12",
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
    size: "12",
    cardType: CardType.Parent,
    actions: [
      { url: "https://www.chartjs.org", title: "Go" }
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
    size: "6",
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
    media: { url: "https://www.w3schools.com/tags/horse.mp3", type: "audio/mpeg"},
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
    media: { url: "https://www.w3schools.com/html/movie.mp4", type: "video/mp4"},
    data: null
  }
]
