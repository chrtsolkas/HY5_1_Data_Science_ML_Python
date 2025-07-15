var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1300 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */ 

// setup x 
var xValue = function(d) { return d["year"];}, // data -> value
    xScale = d3.scaleLinear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

// setup y
var yValue = function(d) { return d["averageRating"];}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.axisLeft(yScale);
  
// setup circle size
var sValue = function(d) { return Math.sqrt(d["propVotes"]);};

// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
var line = d3.line()
    .x(d => { return xScale(d[0]); })
    .y(d => { return yScale(d[1]); })
    .curve(d3.curveMonotoneX);

var seriesLine;
var selSeries;

var updateSeriesLine = function(seriesArray) {
  seriesLine.attr("d", line(seriesArray))
    .attr("class", "line");
}

var clearSelection = function(selSeries) {
  selSeries
    .style("fill", "rgb(176, 196, 222, 0.5)");
  tooltip.style("opacity", 0);
  seriesLine.style("stroke-width", 0);
}

var drawSeriesLine = function(lineData, selSeries) {
  selSeries
    .style("fill", "rgb(70, 130, 180, 1)") // steelblue
    .raise();
  var lineDatum = lineData[selSeries.datum()["parentTconst"]];
  var lineArray = lineDatum.year.map(function (e, i) {
    return [e, lineDatum.averageRating[i]];
  });
  lineArray.sort((a, b) => a[0] - b[0]);
  updateSeriesLine(lineArray);
  seriesLine.style("stroke-width", 3).raise();
}

// load data
Promise.all([
  d3.csv("to_show.csv"),
  d3.json("lines.json")
]).then(function(files) {
  var data = files[0];
  var lineData = files[1];

  // change string (from CSV) into number format
  data.forEach(function(d) {
    d["year"] = +d["year"];
    d["averageRating"] = +d["averageRating"];
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue), d3.max(data, yValue)]);

  seriesLine = this.svg.append("path")
    .attr('class', 'line');

  // x-axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Year");

  // y-axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Average Rating");

  seriesLine = this.svg.append("path")
    .attr('class', 'line')
    .attr("stroke", 0);

  // draw dots
  svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("data-series", function(d) { return d["parentTconst"]; })
    .attr("r", function(d) { return 5 * sValue(d); })
    .attr("cx", xMap)
    .attr("cy", yMap)
    .attr("data-season-number", function(d) { return d["seasonNumber"]; })
    .on("mouseenter", function(event, d) {
      var seriesTitleDOM = d3.select("#seriesTitle");
      seriesTitleDOM.property("value", "");
      seriesTitleDOM.node().blur();
      document.getElementById("seriesTitle").blur();
      if (selSeries) {
        clearSelection(selSeries);
      }
      selSeries = d3.selectAll("[data-series=" + d["parentTconst"] + "]");
      selSeries
        .style("fill", "rgb(176, 196, 222, 1)");
      tooltip.style("opacity", .9);
      tooltip.html(d["primaryTitle"] + "<br/>" 
		   + "Year: " + Math.round(xValue(d)) + "<br/>" 
		   + "Average Rating: " + yValue(d).toFixed(2))
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
       drawSeriesLine(lineData, selSeries);
    })
    .on("mouseleave", function(event, d) {
      clearSelection(selSeries);
    });

  d3.select("#seriesTitle").on("input", function () {
    var seriesTitle = this.value;
    var serSeriesDatum;
    var midNode;
    if (selSeries) {
      clearSelection(selSeries);
    }
    d = data.find(el => {
      return (el.primaryTitle.toLowerCase() === seriesTitle.toLowerCase());
    });
    if (!d) {
      return;
    }
    selSeries = d3.selectAll("[data-series=" + d["parentTconst"] + "]");
    startNode = selSeries.nodes().find(el => {
      return (el.dataset["seasonNumber"] == "1.0");
    });
    tooltip.style("opacity", .9);
    tooltip.html(d["primaryTitle"] + "<br/>" 
		 + "Start Year: " + Math.round(d["startYear"]) + "<br/>" 
		 + "Average Rating: " + d["averageRating"].toFixed(2))
      .style("left", (startNode.cx.animVal.value + 5) + "px")
      .style("top", (startNode.cy.animVal.value - 28) + "px");
    drawSeriesLine(lineData, selSeries);
  });
  
}).catch(function(err) {
  console.log(err);
});
