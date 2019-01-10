import { RefinerGroup } from 'src/app/refiner';

export const SimpleFruitCategories: RefinerGroup[] = [
    {
        id: 1,
        title: "Categories",
        expanded: false,
        children: [
            {
                id: 11,
                title: "Citrus",
                groupId: 1,
                selected: false
            },
            {
                id: 12,
                title: "Stonefruit",
                groupId: 1,
                selected: false
            },
            {
                id: 13,
                title: "Berries",
                groupId: 1,
                selected: false
            },
            {
                id: 4,
                title: "Hard",
                groupId: 1,
                selected: false
            },
            {
                id: 5,
                title: "Fleshy",
                groupId: 1,
                selected: false
            },
        ]
    }
]

export const ComplexFruitCategories: RefinerGroup[] = [
    {
        id: 1,
        title: "Fleshy fruits",
        expanded: false,
        children: [
            {
                id: 11,
                title: "Pomes",
                groupId: 1,
                selected: false
            },
            {
                id: 12,
                title: "Drupes",
                groupId: 1,
                selected: false
            },
            {
                id: 13,
                title: "Berries",
                groupId: 1,
                selected: false
            },
            {
                id: 14,
                title: "Hesperidia",
                groupId: 1,
                selected: false
            },
            {
                id: 15,
                title: "Pepos",
                groupId: 1,
                selected: false
            }
        ]
    },
    {
        id: 2,
        title: "Dry fruits",
        expanded: false,
        children: [
            {
                id: 21,
                title: "Follicles",
                groupId: 2,
                selected: false
            },
            {
                id: 22,
                title: "Legumes",
                groupId: 2,
                selected: false
            },
            {
                id: 23,
                title: "Capsules",
                groupId: 2,
                selected: false
            },
            {
                id: 24,
                title: "Achenes",
                groupId: 2,
                selected: false
            },
            {
                id: 25,
                title: "Nuts",
                groupId: 2,
                selected: false
            },
            {
                id: 26,
                title: "Samaras",
                groupId: 2,
                selected: false
            },
            {
                id: 27,
                title: "Schizocarps",
                groupId: 2,
                selected: false
            },
            {
                id: 28,
                title: "Caryopses",
                groupId: 2,
                selected: false
            }
        ]
    }
]