import React from 'react';

function SizeGuide() {
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold leading-tight text-center mb-8">Size Guide</h1>

        {/* Menswear Body Measurements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Menswear Body Measurements</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Size</th>
                  <th className="py-2 px-4 border-b">XS</th>
                  <th className="py-2 px-4 border-b">S</th>
                  <th className="py-2 px-4 border-b">M</th>
                  <th className="py-2 px-4 border-b">L</th>
                  <th className="py-2 px-4 border-b">XL</th>
                  <th className="py-2 px-4 border-b">XXL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Australian Size', values: [8, 10, 12, 14, 16, 18] },
                  { label: 'UK Size', values: [8, 10, 12, 14, 16, 18] },
                  { label: 'European Size', values: [36, 38, 40, 42, 44, 46] },
                  { label: 'US Size', values: [4, 6, 8, 10, 12, 14] },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4 border-b">{row.label}</td>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-2 px-4 border-b">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Womens Footwear Measurements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Womens Footwear</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Size</th>
                  <th className="py-2 px-4 border-b">S</th>
                  <th className="py-2 px-4 border-b">M</th>
                  <th className="py-2 px-4 border-b">L</th>
                  <th className="py-2 px-4 border-b">XL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Australian Size', values: ['5 - 6', '7 - 8', '9 - 10', '11+'] },
                  { label: 'UK Size', values: ['3 - 4', '5 - 6', '7 - 8', '9+'] },
                  { label: 'European Size', values: ['36 - 37', '38 - 39', '40 - 41', '42+'] },
                  { label: 'US Size', values: ['5 - 6', '7 - 8', '9 - 10', '11+'] }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4 border-b">{row.label}</td>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-2 px-4 border-b">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kids Footwear Measurements */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Kids Footwear</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Size</th>
                  <th className="py-2 px-4 border-b">XS</th>
                  <th className="py-2 px-4 border-b">S</th>
                  <th className="py-2 px-4 border-b">M</th>
                  <th className="py-2 px-4 border-b">L</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'US Size', values: ['3 - 4', '5 - 6', '7 - 8', '9 - 10'] },
                  { label: 'European Size', values: ['35 - 36', '37 - 38', '39 - 40', '41 - 42'] },
                  { label: 'UK Size', values: ['2 - 3', '4 - 5', '6 - 7', '8 - 9'] }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4 border-b">{row.label}</td>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-2 px-4 border-b">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;

// CSS
const styles = `
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f3f4f6;
  }

  tr:nth-child(even) {
    background-color: #f9fafb;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
