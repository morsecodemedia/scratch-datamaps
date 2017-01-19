var map = new Datamap({
  element: document.getElementById('container'),
  projection: 'mercator', //'orthographic',
  responsive: true,
  fills: {
    defaultFill: "#CABAA1",
    passedThrough: "#A9C0C6",
    visited: "#414C5E",
    home: "#414C5E",
    wantToGo: "#16141F"
  },
  geographyConfig: {
    highlightOnHover: false
  },
  data: {
    // Home country
    USA: { fillKey: "home" },
    
    // Countries I've visited
    BHS: { fillKey: "visited" },
    CAN: { fillKey: "visited" },
    ITA: { fillKey: "visited" },
    LCA: { fillKey: "visited" },
    MEX: { fillKey: "visited" },
    
    // Countries I've had layovers in
    DEU: { fillKey: "passedThrough" },
    
    // Countries I wish to visit
    AUS: { fillKey: "wantToGo" },
    BRA: { fillKey: "wantToGo" },
    CHN: { fillKey: "wantToGo" },
    CRI: { fillKey: "wantToGo" },
    HRV: { fillKey: "wantToGo" },
    CUB: { fillKey: "wantToGo" },
    DOM: { fillKey: "wantToGo" },
    FRA: { fillKey: "wantToGo" },
    GRC: { fillKey: "wantToGo" },
    HUN: { fillKey: "wantToGo" },
    ISL: { fillKey: "wantToGo" },
    IRL: { fillKey: "wantToGo" },
    JPN: { fillKey: "wantToGo" },
    MDV: { fillKey: "wantToGo" },
    NLD: { fillKey: "wantToGo" },
    PRI: { fillKey: "wantToGo" },
    ESP: { fillKey: "wantToGo" },
    SWE: { fillKey: "wantToGo" },
    TCA: { fillKey: "wantToGo" },
    GBR: { fillKey: "wantToGo" }
  }
});

window.addEventListener('resize', function() {
  map.resize();
});