import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: 'M3x6 bolt', image:'M3_6.png', model: 'CBE3-6', qty: 146, unitPrice: '¥44', totalPrice: '¥6,424', supplier: 'MiSUMi' },
  { name: 'M3x8 bolt', image:'M3_8.png', model: 'CBE3-8', qty: 38, unitPrice: '¥56', totalPrice: '¥2,128', supplier: 'MiSUMi' },
  { name: 'M3x15 bolt', image:'M3_15.png', model: 'CBE3-15', qty: 24, unitPrice: '¥52', totalPrice: '¥1,248', supplier: 'MiSUMi' },
  { name: 'M3x18 bolt', image:'M3_18.png', model: 'CBE3-18', qty: 12, unitPrice: '¥54', totalPrice: '¥648', supplier: 'MiSUMi' },
  { name: 'M4x6 bolt', image:'M4_6.png', model: 'CBE4-6', qty: 16, unitPrice: '¥54', totalPrice: '¥864', supplier: 'MiSUMi' },
  { name: 'M4x8 bolt', image:'M4_8.png', model: 'CBE4-8', qty: 16, unitPrice: '¥61', totalPrice: '¥976', supplier: 'MiSUMi' },
  { name: 'M4x10 bolt', image:'M4_10.png', model: 'CBE4-10', qty: 24, unitPrice: '¥59', totalPrice: '¥1,416', supplier: 'MiSUMi' },
  { name: 'M5x10 bolt', image:'M5_10.png', model: 'CBE5-10', qty: 24, unitPrice: '¥59', totalPrice: '¥1,416', supplier: 'MiSUMi' },
  { name: 'Circular Post - Threaded on Both Ends', image:'circular_post_61.png', model: 'AETTS8-61-SC0-M3-N3', qty: 2, unitPrice: '¥1,120', totalPrice: '¥2,240', supplier: 'MiSUMi' },
  { name: 'Circular Post - Threaded on Both Ends', image:'circular_post_74-2.png', model: 'AETTS8-74.2-SC0-M3-N3', qty: 4, unitPrice: '¥1,120', totalPrice: '¥4,480', supplier: 'MiSUMi' },
  { name: 'Step Bolt', image:'dbsy465.png', model: 'DBSY4-6-5', qty: 4, unitPrice: '¥425', totalPrice: '¥1,700', supplier: 'MiSUMi' },
  { name: 'Single-row deep groove ball bearing', image:'mr106zz1.png', model: 'MR106ZZ1', qty: 4, unitPrice: '¥344', totalPrice: '¥1,376', supplier: 'MiSUMi' },
  { name: 'Ball bearing, flanged, double shielded', image:'fl6700zz.png', model: 'FL6700ZZ', qty: 4, unitPrice: '¥880', totalPrice: '¥3,520', supplier: 'MiSUMi' },
  { name: 'Ball bearing, flanged, double shielded', image:'fl6803zz.png', model: 'FL6803ZZ', qty: 2, unitPrice: '¥1,950', totalPrice: '¥3,900', supplier: 'MiSUMi' },
  { name: 'Ultra-thin resin washer', image:'washer.png', model: 'SWSPS12-6-0.5', qty: 8, unitPrice: '¥250', totalPrice: '¥2,000', supplier: 'MiSUMi' }
];

export default function ArmOffTheShelf() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ height: '8em', textAlign: 'center', borderBottom: '5px solid #ccc' }}>
          <th>Name</th>
          <th>Photo</th>
          <th>Model Number</th>
          <th>Quantity</th>
          <th>Unit Price (JPY)</th>
          <th>Total Price (JPY)</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {components.map((comp) => (
          <tr key={comp.name} style={{ height: '10em', textAlign: 'center', backgroundColor: 'transparent' }}>
            <td>{comp.name}</td>
            <td><ComponentPhoto src={require(`@site/static/img/BOM/arm/${comp.image}`).default} alt={comp.name} /></td>
            <td>{comp.model}</td>
            <td>{comp.qty}</td>
            <td>{comp.unitPrice}</td>
            <td>{comp.totalPrice}</td>
            <td>{comp.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
