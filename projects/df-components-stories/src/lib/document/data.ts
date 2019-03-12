
import { DocumentStatus } from "projects/df-components/src/public_api";

export const statuslist: DocumentStatus[] = [
    {
      id: "1",
      icon: "content_copy",
      caption: "In Draft",
      colour: "Pink",
      order: 1
    },
    {
      id: "2",
      icon: "how_to_reg",
      caption: "Ready",
      colour: "GhostWhite",
      order: 2
    },
    {
      id: "3",
      icon: "face",
      caption: "Cancelled",
      colour: "Crimson",
      order: 3
    }
  ]