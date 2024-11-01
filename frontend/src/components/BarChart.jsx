import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const data = [12, 5, 6, 7, 10, 15];

      // Define the margins, width, and height of the SVG
      const margin = { top: 20, right: 30, bottom: 50, left: 50 };
      const width = 500 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      // Clear the container if it has any previous content
      d3.select(d3Container.current).selectAll('*').remove();

      // Create the SVG container
      const svg = d3.select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Set up the scales
      const xScale = d3.scaleBand()
        .domain(data.map((_, i) => i))
        .range([0, width])
        .padding(0.3);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .nice()
        .range([height, 0]);

      // Add X axis
      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickFormat((d, i) => `Item ${i + 1}`))
        .selectAll("text")
        .attr("transform", "translate(0,5)")
        .style("text-anchor", "middle")
        .attr('fill', 'white');

      // Add Y axis
      svg.append('g')
        .call(d3.axisLeft(yScale))
        .attr('fill', 'white');

      // Add bars with animations
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', yScale(0)) // Start the bars at the bottom
        .attr('width', xScale.bandwidth())
        .attr('height', 0) // Start with height 0 for animation
        .attr('fill', 'tomato')
        .transition()
        .duration(800)
        .attr('y', d => yScale(d))
        .attr('height', d => height - yScale(d));

      // Add labels with animations
      svg.selectAll('text.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', (d, i) => xScale(i) + xScale.bandwidth() / 2)
        .attr('y', yScale(0))
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .text(d => d)
        .transition()
        .duration(800)
        .attr('y', d => yScale(d) - 5);

      // Add X axis label
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 10)
        .attr('fill', 'white')
        .text('Items');

      // Add Y axis label
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -margin.left + 15)
        .attr('fill', 'white')
        .text('Values');
    }
  }, [d3Container.current]);

  return (
    <svg
      className="d3-component"
      ref={d3Container}
    />
  );
};

export default BarChart;
