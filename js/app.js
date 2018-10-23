let memberlist =  [
    {
        memberId: 1,
        firstname: "Ole",
        lastname: "Olsen",
        address: "Olsenbakken",
        phone: "91826453" 
    },
    {
        memberId: 2,
        firstname: "Anne",
        lastname: "Annesen",
        address: "Annesvingen",
        phone: "87655458" 
    }
];

let api = new ApiRequestHandler();

let ui = new UIHandler(memberlist);

let uiEventHandler = new UIEventHandler(ui, api);


