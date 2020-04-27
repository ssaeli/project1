import {  } from "module";

data = Object.assign(new Map(d3.csvParse(await FileAttachment("hale.csv").text(), ({country, hale}) => [rename.get(country) || country, +hale])), {title: "Healthy life expectancy (years)"})

d3.dsv(';', '\dati.csv', funciton(d){
return {
  dates : d.date,
  burger_size : d.size,
}
}).then(function(data){
console.log(data);
})

d3.select("body").node().getBoundingClientRect().width

World Choropleth

data = 
    
  Map(194) {
  "Afghanistan" => 53
  "Albania" => 68.1
  "Algeria" => 65.5
  "Andorra" => NaN
  "Angola" => 55.8
  "Antigua and Barb." => 67
  "Argentina" => 68.4
  "Armenia" => 66.3
  "Australia" => 73
  "Austria" => 72.4
  "Azerbaijan" => 64.9
  "Bahamas" => 66.8
  "Bahrain" => 68.1
  "Bangladesh" => 63.3
  "Barbados" => 67
  "Belarus" => 65.5
  "Belgium" => 71.6
  "Belize" => 62.5
  "Benin" => 53.5
  "Bhutan" => 60.7
  … more
}
rename = 
    

  Map(28) {"Antigua and Barbuda" => "Antigua and Barb.", "Bolivia (Plurinational State of)" => "Bolivia", "Bosnia and Herzegovina" => "Bosnia and Herz.", "Brunei Darussalam" => "Brunei", "Central African Republic" => "Central African Rep.", "Cook Islands" => "Cook Is.", "Democratic People's Republic of Korea" => "North Korea", "Democratic Republic of the Congo" => "Dem. Rep. Congo", "Dominican Republic" => "Dominican Rep.", "Equatorial Guinea" => "Eq. Guinea", "Iran (Islamic Republic of)" => "Iran", "Lao People's Democratic Republic" => "Laos", "Marshall Islands" => "Marshall Is.", "Micronesia (Federated States of)" => "Micronesia", "Republic of Korea" => "South Korea", "Republic of Moldova" => "Moldova", "Russian Federation" => "Russia", "Saint Kitts and Nevis" => "St. Kitts and Nevis", "Saint Vincent and the Grenadines" => "St. Vin. and Gren.", "Sao Tome and Principe" => "São Tomé and Principe", …}
projection = ƒ(t)
path = ƒ(t)
width = 975
height = 475
outline = 

  Object {type: "Sphere"}
countries = 
    

  Object {type: "FeatureCollection", features: Array(241)}
world = 
    

  Object {type: "Topology", objects: Object, arcs: Array(1959), bbox: Array(4), transform: Object}
topojson = 
    

  Object {bbox: ƒ(e), feature: ƒ(e, t), merge: ƒ(e), mergeArcs: ƒ(e, t), mesh: ƒ(e), meshArcs: ƒ(e, t, r), neighbors: ƒ(e), quantize: ƒ(e, t), transform: ƒ(e), untransform: ƒ(e)}
d3 = 

  Object {event: null, format: ƒ(t), formatPrefix: ƒ(t, n), timeFormat: ƒ(t), timeParse: ƒ(t), utcFormat: ƒ(t), utcParse: ƒ(t), FormatSpecifier: ƒ(t), active: ƒ(t, n), arc: ƒ(), area: ƒ(), areaRadial: ƒ(), ascending: ƒ(t, n), autoType: ƒ(t), axisBottom: ƒ(t), axisLeft: ƒ(t), axisRight: ƒ(t), axisTop: ƒ(t), bisect: ƒ(n, e, r, i), bisectLeft: ƒ(n, e, r, i), …}
import {legend} from @d3/color-legend
rename = new Map([
  ["Antigua and Barbuda", "Antigua and Barb."],
  ["Bolivia (Plurinational State of)", "Bolivia"],
  ["Bosnia and Herzegovina", "Bosnia and Herz."],
  ["Brunei Darussalam", "Brunei"],
  ["Central African Republic", "Central African Rep."],
  ["Cook Islands", "Cook Is."],
  ["Democratic People's Republic of Korea", "North Korea"],
  ["Democratic Republic of the Congo", "Dem. Rep. Congo"],
  ["Dominican Republic", "Dominican Rep."],
  ["Equatorial Guinea", "Eq. Guinea"],
  ["Iran (Islamic Republic of)", "Iran"],
  ["Lao People's Democratic Republic", "Laos"],
  ["Marshall Islands", "Marshall Is."],
  ["Micronesia (Federated States of)", "Micronesia"],
  ["Republic of Korea", "South Korea"],
  ["Republic of Moldova", "Moldova"],
  ["Russian Federation", "Russia"],
  ["Saint Kitts and Nevis", "St. Kitts and Nevis"],
  ["Saint Vincent and the Grenadines", "St. Vin. and Gren."],
  ["Sao Tome and Principe", "São Tomé and Principe"],
  ["Solomon Islands", "Solomon Is."],
  ["South Sudan", "S. Sudan"],
  ["Swaziland", "eSwatini"],
  ["Syrian Arab Republic", "Syria"],
  ["The former Yugoslav Republic of Macedonia", "Macedonia"],
  // ["Tuvalu", ?],
  ["United Republic of Tanzania", "Tanzania"],
  ["Venezuela (Bolivarian Republic of)", "Venezuela"],
  ["Viet Nam", "Vietnam"]
])

color = d3.color('black')

outline = ({type: "Sphere"})

countries = topojson.feature(world, world.objects.countries)

world = FileAttachment("countries-50m.json").json()

topojson = require("topojson-client@3")

topojson = require("topojson-client@3")


import {legend} from "@d3/color-legend"


chart = {
 
  
  const svg = d3.create("svg")
      .style("display", "block")
      .attr("viewBox", [0, 0, width, height]);

  const defs = svg.append("defs");

  defs.append("path")
      .attr("id", "outline")
      .attr("d", path(outline));


const svg = body.append('svg')
    .attr('width', 400)
    .attr('height', 300);

color
  defs.append("clipPath")
      .attr("id", "clip")
    .append("use")
      .attr("xlink:href", new URL("#outline", location));

  const g = svg.append("g")
      .attr("clip-path", `url(${new URL("#clip", location)})`);

  g.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "white");

  g.append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
      .attr("d", path)
    .append("title")
      .text(d => `${d.properties.name}
${data.has(d.properties.name) ? data.get(d.properties.name) : "N/A"}`);

  g.append("path")
      .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  svg.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "none")
      .attr("stroke", "black");

  return svg.node();
  
}