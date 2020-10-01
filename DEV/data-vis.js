// console.log('sim sim salabim');

function getTopicObject(arr) {
    var obj = {};

    arr.forEach(i => {
        i.topic.forEach(t => {
            if (!obj.hasOwnProperty(t)) {
                obj[t] = 1
            } else {
                obj[t] += 1;
            }
        });
    });

    return obj;
}

$.getJSON("./data/cleanData.json", jsonData => {
    // console.log(typeof jsonData);
    // console.log(Array.isArray(jsonData) );
    // console.log(jsonData.length);

    var dataObj = getTopicObject(jsonData);

    // set the dimensions and margins of the graph
    var width = 600
    height = 600
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // set the color scale
    var color = d3.scaleOrdinal()
        .domain(dataObj)
        .range(d3.schemeCategory20c)
        // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        })
    var data_ready = pie(d3.entries(dataObj))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(100) // This is the size of the donut hole
            .outerRadius(radius)
        )
        .attr('fill', function (d) {
            return (color(d.dataObj.key))
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
});




// ======================================================================
/*    
    var nodeData = {
        "name": "TOPICS",
        "children": jsonData
    };

    var metaData = [];
    var metObj = {
        topic: 1
    };

    // Variables
    var width = 500;
    var height = 500;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemePaired);

    // Create primary <g> element
    var g = d3.select('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // Data strucure
    var partition = d3.partition()
        .size([2 * Math.PI, radius]);

    // Find data root
    var root = d3.hierarchy(jsonData)
        .count(d => {
            return d.topic.length
        })
    // .count(d => {
    //     return d.objectType.length
    // })
    // .count(d => {
    //     return d.year.length
    // });

    // Size arcs
    partition(root);
    var arc = d3.arc()
        .startAngle(d => {
            return d.x0
        })
        .endAngle(d => {
            return d.x1
        })
        .innerRadius(d => {
            return d.y0
        })
        .outerRadius(d => {
            return d.y1
        });

    // // Put it all together
    g.selectAll('path')
        .data(root.descendants())
        .enter().append('path')
        .attr("display", function (d) {
            return d.depth ? null : "none";
        })
        .attr("d", arc)
        .style('stroke', '#fff')
        .style("fill", function (d) { return color((d.children ? d : d.parent).data.title); });
*/