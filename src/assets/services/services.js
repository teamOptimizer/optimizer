export const categories = [
    {
        name: 'Food',
        preparedAtWhatTime: '',
        metrics: 'kgs',
        timelineToGetDelivered: '',
        expireTime: '',
    },
    {
        name: 'Clothing',
        metrics: 'count',
    },
    {
        name: 'Academics',
        metrics: 'count',
        standard: '',
        typeOfAcademics: 'pens, books',
        image: ''
    },
    {
        name: 'Construction',
        metrics: 'ton',
        material: 'tiles, sand, cement'
    }
];

export const notifications = [
    {
        category: 'Food',
        description: 'Nikhil raised the food donation request of 10 kg of items rice, sambar at kairatabad',
        createdOn: '',
        action: '/event/id',
    },
    {
        category: 'Clothes',
        userDetails: { name: 'Organisations', userType: 'organisation', members: 25, location: '' },
        description: 'Nikhil raised the Clothing donation request',
        createdOn: '',
        eventId: '',
        action: 'request'
    },
]

export const userTypes = [
    { key: 1, text: 'Donar', value: 'donar' },
    { key: 2, text: 'Requestor', value: 'requestor' },
    { key: 3, text: 'both', value: 'both' }
]

export const categoryOptions = [
    { key: 1, text: 'Food', value: 'food' },
    { key: 2, text: 'Clothing', value: 'clothing' },
    { key: 3, text: 'Academics', value: 'academics' },
    { key: 4, text: 'Construction Items', value: 'construction' }
]