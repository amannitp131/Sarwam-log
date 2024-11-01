import React, { useState } from 'react';
import './dashgraph.css';
import { color } from 'chart.js/helpers';

const Dashgraph = () => {
  const [selectedStatus, setSelectedStatus] = useState('NEW');

  const statuses = ['NEW', 'PREPARING', 'SHIPPING'];
  const orders = {
    NEW: ['Order 1', 'Order 2', 'Order 3','Order 1', 'Order 2', 'Order 3'],
    PREPARING: ['Order 4', 'Order 5', 'Order 6','Order 4', 'Order 5', 'Order 6'],
    SHIPPING: ['Order 7', 'Order 8', 'Order 9','Order 4', 'Order 5', 'Order 6']
  };

  const metrics = [
    { label: '12% increase in this month', value: '12%', description: 'Increase' },
    { label: 'Packages in transit', value: '25.8%', description: '10k' },
    { label: 'Packages out for delivery', value: '4.3%', description: '5k' },
    { label: 'Packages delivered', value: '12.5%', description: '15k' },
    { label: 'Delivery success rate', value: '35.6%', description: '95%' },
    { label: 'Average delivery time', value: '2.15 Days', description: '2.5 Days' },
    { label: 'Customer satisfaction', value: '5.7%', description: '4.5/5' }
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredPoint(index);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const points = [
    { x: 50, y: 150, percentage: '25%' },
    { x: 100, y: 100, percentage: '50%' },
    { x: 150, y: 120, percentage: '45%' },
    { x: 200, y: 80, percentage: '65%' },
    { x: 250, y: 90, percentage: '60%' },
    { x: 300, y: 70, percentage: '70%' },
    { x: 350, y: 100, percentage: '55%' },
    { x: 400, y: 80, percentage: '65%' },
    { x: 450, y: 120, percentage: '45%' },
    { x: 500, y: 100, percentage: '60%' },
    { x: 550, y: 120, percentage: '45%' },
    { x: 600, y: 90, percentage: '60%' },
    { x: 650, y: 120, percentage: '45%' },
    { x: 700, y: 100, percentage: '55%' },
    { x: 750, y: 120, percentage: '45%' },
    { x: 800, y: 80, percentage: '65%' },
  ];

  return (
    <div id='dashgraph'>
    <div className="orders-container">
      <div className="summary">
        <h2>62 Deliveries in Progress</h2>
      </div>
      <div className="tabs">
        {statuses.map(status => (
          <button
            key={status}
            className={`tab-button ${status === selectedStatus ? 'active' : ''}`}
            onClick={() => handleStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <div className="orders-list">
        {orders[selectedStatus].map((order, index) => (
          <div key={index} className="order-item">
            {order}
          </div>
        ))}
      </div>
    </div>
    <div className="performance-container">
    <h2>Delivery Performance</h2>
    <ul className="metrics-list">
      {metrics.map((metric, index) => (
        <li key={index} className="metric-item">
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value">{metric.value}</div>
          <div className="metric-description">{metric.description}</div>
        </li>
      ))}
    </ul>
  </div>
  <div className="shipment-statistics-container">
      <div className="header">
        <h2 id='shiphead'>Shipment Statistics</h2>
        <p id='shiphead'>Total number of deliveries: 23.8k</p>
      </div>
      <div className="graph-container">
        <svg width="100%" height="200">
          {/* X and Y Axis */}
          <line x1="50" y1="180" x2="800" y2="180" stroke="#ccc" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="180" stroke="#ccc" strokeWidth="2" />

          {/* X Axis Labels */}
          <text x="100" y="195" fontSize="12" textAnchor="middle" >8 Aug</text>
          <text x="200" y="195" fontSize="12" textAnchor="middle">9 Aug</text>
          <text x="300" y="195" fontSize="12" textAnchor="middle">10 Aug</text>
          <text x="400" y="195" fontSize="12" textAnchor="middle">11 Aug</text>
          <text x="500" y="195" fontSize="12" textAnchor="middle">12 Aug</text>
          <text x="600" y="195" fontSize="12" textAnchor="middle">13 Aug</text>
          <text x="700" y="195" fontSize="12" textAnchor="middle">14 Aug</text>
          <text x="800" y="195" fontSize="12" textAnchor="middle">15 Aug</text>

          {/* Y Axis Labels */}
          <text x="30" y="50" fontSize="12" textAnchor="middle">100%</text>
          <text x="30" y="100" fontSize="12" textAnchor="middle">75%</text>
          <text x="30" y="150" fontSize="12" textAnchor="middle">50%</text>
          <text x="30" y="200" fontSize="12" textAnchor="middle">25%</text>

          {/* Zig Zag Line */}
          <polyline
            points={points.map(point => `${point.x},${point.y}`).join(' ')}
            fill="none"
            stroke="#007bff"
            strokeWidth="2"
          />

          {/* Hover Points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#007bff"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </svg>
        {hoveredPoint !== null && (
          <div
            className="tooltip"
            style={{ left: `${points[hoveredPoint].x}px`, top: `${points[hoveredPoint].y - 40}px` }}
          >
            {points[hoveredPoint].percentage}
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Dashgraph;
