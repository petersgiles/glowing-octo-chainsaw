import { RefinerGroup } from 'src/app/refiner';

export const SimpleRefinerGroups: RefinerGroup[] = [
    {
        id: 1,
        title: "Fruits",
        expanded: false,
        children: [
            {
                id: 11,
                title: "Apple",
                groupId: 1,
                selected: false
            },
            {
                id: 11,
                title: "Banana",
                groupId: 1,
                selected: false
            },
            {
                id: 11,
                title: "Orange",
                groupId: 1,
                selected: false
            },
        ]
    }
]