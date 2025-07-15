import React from 'react';
import ComponentPhoto from './ComponentPhoto';
import useBaseUrl from '@docusaurus/useBaseUrl';

const components = [
  { name: 'Rail Connector', image: 'rail_connector.png', model: 'MVSHM-3N0304G-47X-2982S-L', qty: 2, unitPrice: '¥2,969', totalPrice: '¥5,938', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY'},
  { name: 'Rotor Controller', image: 'rotor_controller.png', model: 'MVBLK-ASN-487-ZX4P6-L', qty: 2, unitPrice: '¥7,414', totalPrice: '¥14,828', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY'},
  { name: 'EE Linkage', image: 'rotor_linkage.png', model: 'MVBLK-SUB-487-HZGNT-L', qty: 4, unitPrice: '¥8,133', totalPrice: '¥32,532', method: 'Metal Cutting (CNC)', material: 'SUS304', manufacturer: 'MiSUMi MEVIY'},
  { name: 'Rail CNC attachment', image: 'rail_CNC_attachment.png', model: 'MVBLK-ASN-487-JNRUX-L', qty: 4, unitPrice: '¥4,600', totalPrice: '¥18,400', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY'},
  
];

export default function EEManufacturedTable() {
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
            <td><ComponentPhoto src={useBaseUrl(`/img/BOM/ee/${comp.image}`)} alt={comp.name} /></td>
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
