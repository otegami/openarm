import React from 'react';
import ComponentPhoto from './ComponentPhoto';
import useBaseUrl from '@docusaurus/useBaseUrl';

const components = [
  { name: '250x190mm Base Plate', image: 'base_plate.png', model: 'MVBLK-ASN-47X-ALR8G-L', qty: 1, unitPrice: '¥10,081', totalPrice: '¥10,081', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY'},
];

export default function PedestalManufacturedTable() {
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
            <th>Manufacturing Method</th>
            <th>Material</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {components.map((comp) => (
            <tr key={comp.name} style={{ height: '10em', textAlign: 'center', backgroundColor: 'transparent' }}>
              <td>{comp.name}</td>
              <td><ComponentPhoto src={useBaseUrl(`/img/BOM/pedestal/${comp.image}`)} alt={comp.name} /></td>
              <td>{comp.model}</td>
              <td>{comp.qty}</td>
              <td>{comp.unitPrice}</td>
              <td>{comp.totalPrice}</td>
              <td>{comp.method}</td>
              <td>{comp.material}</td>
              <td>{comp.manufacturer}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}
