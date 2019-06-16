const controller = require("../people");
const data = require("./data/people");

describe("people controller", () => {
  test("should clean people list", () => {
    expect(controller.list(data)).toEqual({
      data: [
        {
          email: "raa_beetty@google.com",
          id: 101694741,
          name: "Keagan Tromp",
          title: "Central Assurance Administrator"
        },
        {
          email: "erik@lubowitz.name",
          id: 101694759,
          name: "Sheridan Bogisich",
          title: "Lead Applications Planner"
        },
        {
          email: "amixe@lindgren.info",
          id: 101694867,
          name: "Marisa Casper",
          title: "Direct Security Representative"
        },
        {
          email: "mamixe@lindgren.info",
          id: 101694794,
          name: "Griffin Hand",
          title: "International Usability Agent"
        },
        {
          email: "george_aiegwnd@boyer.name",
          id: 101694784,
          name: "Mikel Reynolds",
          title: "Global Solutions Technician"
        },
        {
          email: "enoch.kenlieg@beahandooley.com",
          id: 101694787,
          name: "Deshaun Baumbach",
          title: "Dynamic Operations Planner"
        },
        {
          email: "jrrey@glover.co",
          id: 101694782,
          name: "Meta Pfannerstill",
          title: "Direct Functionality Orchestrator"
        },
        {
          email: "athena@schroeder.net",
          id: 101694780,
          name: "Ivah Rutherford",
          title: "District Markets Technician"
        },
        {
          email: "tmohas@feestwyman.io",
          id: 101694778,
          name: "Charlotte Reynolds",
          title: "International Integration Planner"
        },
        {
          email: "nntwoa@roberts.co",
          id: 101694775,
          name: "Ivah Denesik",
          title: "National Research Consultant"
        },
        {
          email: "dulhe.cilll@reichert.biz",
          id: 101694772,
          name: "Lula Kiehn",
          title: "Legacy Configuration Engineer"
        },
        {
          email: "miwnie_nisozk@damore.net",
          id: 101694769,
          name: "Durward Lindgren",
          title: "Human Usability Technician"
        },
        {
          email: "baomi.keenler@okon.org",
          id: 101694767,
          name: "Madyson Rodriguez",
          title: "Regional Creative Facilitator"
        },
        {
          email: "ercik@lubowitz.name",
          id: 101694765,
          name: "Myrl Sawayn",
          title: "Internal Division Director"
        },
        {
          email: "cajkeline@lemke.co",
          id: 101694763,
          name: "Cassandra Lebsack",
          title: "Investor Paradigm Officer"
        },
        {
          email: "raa_beetty@quigley.info",
          id: 101694761,
          name: "Jerod Lowe",
          title: "Corporate Usability Facilitator"
        },
        {
          email: "kanira@heaney.biz",
          id: 101694756,
          name: "Ignacio Bayer",
          title: "Lead Branding Architect"
        },
        {
          email: "camron.nisolac@harber.co",
          id: 101694754,
          name: "Demond Weber",
          title: "Chief Accountability Representative"
        },
        {
          email: "madison@dubuque.name",
          id: 101694752,
          name: "Alene Gleason",
          title: "Legacy Intranet Developer"
        },
        {
          email: "anesl.howe@padbergbins.info",
          id: 101694750,
          name: "Jermey Bruen",
          title: "District Interactions Analyst"
        },
        {
          email: "odrthy@flatley.biz",
          id: 101694748,
          name: "Luciano Stracke",
          title: "National Infrastructure Manager"
        },
        {
          email: "jncksoa@sawayn.com",
          id: 101694746,
          name: "Joesph Medhurst",
          title: "Direct Optimization Producer"
        },
        {
          email: "ke_nruel@rauward.info",
          id: 101694744,
          name: "Leonardo Breitenberg",
          title: "National Program Executive"
        },
        {
          email: "rmia@mertzrath.info",
          id: 101694739,
          name: "Henriette Nikolaus",
          title: "Dynamic Markets Administrator"
        },
        {
          email: "lauernce_ward@wittingkuhic.org",
          id: 101694737,
          name: "Janessa Considine",
          title: "Regional Markets Associate"
        }
      ]
    });
  });

  test("should count and sort characters", () => {
    expect(controller.getCount("")).toEqual({
      data: []
    });
    expect(controller.getCount("eros@mail.com")).toEqual({
      data: [
        { count: 2, key: "m" },
        { count: 2, key: "o" },
        { count: 1, key: "e" },
        { count: 1, key: "s" },
        { count: 1, key: "@" },
        { count: 1, key: "r" },
        { count: 1, key: "a" },
        { count: 1, key: "i" },
        { count: 1, key: "l" },
        { count: 1, key: "." },
        { count: 1, key: "c" }
      ]
    });
  });

  test("should suggest similar emails", () => {
    expect(
      controller.getSuggested(
        {
          data: [
            { email_address: "eros@mail.com" },
            { email_address: "eros@some.com" },
            { email_address: "erso@mail.com" },
            { email_address: "some@gmail.com" },
            { email_address: "sore@gmail.com" },
            { email_address: "eeeeros@mail.com" },
            { email_address: "random@mail.com" }
          ]
        },
        "eros@mail.com"
      )
    ).toEqual({
      data: [
        { suggested: "eros@some.com" },
        { suggested: "erso@mail.com" },
        { suggested: "sore@gmail.com" },
        { suggested: "eeeeros@mail.com" }
      ]
    });
    expect(
      controller.getSuggested(
        {
          data: [{ email_address: "eros@mail.com" }]
        },
        "some@mail.com"
      )
    ).toEqual({
      data: [{ suggested: "No suggestions found" }]
    });
  });
});
