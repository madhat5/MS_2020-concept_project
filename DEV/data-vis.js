// // console.log('sim sim salabim');

// // chart object
// chart = {
//     const root = partition(data);

//     const svg = d3.create("svg");

//     svg.append("g")
//     .attr("fill-opacity", 0.6)
//     .selectAll("path")
//     .data(root.descendants().filter(d => d.depth))
//     .join("path")
//     .attr("fill", d => {
//         while (d.depth > 1) d = d.parent;
//         return color(d.data.name);
//     })
//     .attr("d", arc)
//     .append("title")
//     .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

//     svg.append("g")
//     .attr("pointer-events", "none")
//     .attr("text-anchor", "middle")
//     .attr("font-size", 10)
//     .attr("font-family", "sans-serif")
//     .selectAll("text")
//     .data(root.descendants().filter(d => d.depth && (d.y0 + d.y1) / 2 * (d.x1 - d.x0) > 10))
//     .join("text")
//     .attr("transform", function (d) {
//         const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
//         const y = (d.y0 + d.y1) / 2;
//         return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
//     })
//     .attr("dy", "0.35em")
//     .text(d => d.data.name);

//     return svg.attr("viewBox", autoBox).node();
// }

// // autoBox f()
// function autoBox() {
//     document.body.appendChild(this);
//     const {
//         x,
//         y,
//         width,
//         height
//     } = this.getBBox();
//     document.body.removeChild(this);
//     return [x, y, width, height];
// }

// // data
// data = FileAttachment("data/data.json").json()

// // partition = ƒ(data)
// partition = data => d3.partition()
//     .size([2 * Math.PI, radius])
//     (d3.hierarchy(data)
//         .sum(d => d.value)
//         .sort((a, b) => b.value - a.value))

// // color = ƒ(i)
// color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))

// // format = ƒ(t)
// format = d3.format(",d")

// // dimensions
// width = 975
// radius = width / 2
// arc = d3.arc()
//     .startAngle(d => d.x0)
//     .endAngle(d => d.x1)
//     .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
//     .padRadius(radius / 2)
//     .innerRadius(d => d.y0)
//     .outerRadius(d => d.y1 - 1)

// // d3
// d3 = require("d3@6")