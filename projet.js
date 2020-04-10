const width = 400;
const height = 33;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('viewBox', `0 -20 ${width} ${height}`);

function update() {
  const t = svg.transition()
  .duration(750)

  svg.selectAll('text')
    .data(randomLetters(), d => d)
    .join(
      enter => enter.append('text')
      .attr('fill', 'green')
      .attr('x', (d, i) => i * 16)
      .attr('y', -30)
      .text(d => d)
      .call(enter => enter.transition(t)
            .attr('y', 0)),
      update => update
      .attr('fill', 'black')
      .attr('y', 0)
      .call(update => update.transition(t)
            .attr('x', (d, i) => i * 16)),
      exit => exit
      .attr('fill', 'brown')
      .call(exit => exit.transition(t)
            .attr('y', 30)
            .remove())
  );
}

setInterval(update, 2500);


// Utility functions
function randomLetters() {
  return d3.shuffle('abcdefghijklmnopqrstuvwxyz'.split(''))
    .slice(0, Math.floor(6 + Math.random() * 20))
    .sort();
}

d3.geoMercator()
d3.geoMercatorRaw