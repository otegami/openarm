import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: 'USB2CANFD converter', image: 'usb2canfd.jpg', model: 'USB2CANFD-X2', qty: 2, unitPrice: '¥25,000', totalPrice: '¥50,000', supplier: 'Pibiger'},
  { name: 'J1/J2 to Hub Cable', image: 'j1.png', model: 'XL2506130075-3', qty: 4, unitPrice: '¥384', totalPrice: '¥1,536', supplier: 'LCSC'},
  { name: 'J3+J4 to Hub Cable', image: 'j3_j4.png', model: 'XL2506130075-2', qty: 2, unitPrice : '¥806', totalPrice: '¥1,612', supplier: 'LCSC'},
  { name: 'J4+J5+J6+J7 to Hub Cable', image: 'j4_j7.png', model: 'XL2506130075-1', qty: 2, unitPrice: '¥1,515', totalPrice: '¥3,030', supplier: 'LCSC'},
  { name: 'J7 to J8 Cable', image: 'images.jpeg', model: 'Undecided', qty: 2, unitPrice: '¥450', totalPrice: '¥900', supplier: 'LCSC'},
  { name: 'Communication Cable', image: 'images.jpeg', model: 'Undecided', qty: 2, unitPrice: '¥450', totalPrice: '¥900', supplier: 'LCSC'},
  { name: 'Power Supply', image: 'power_supply.jpg', model: '', qty: 2, unitPrice: '¥14,634', totalPrice: '¥29,268', supplier: 'AliExpress'},
  { name: 'PCB', image: 'pcb.png', model: '24V 15A 1005004204524395', qty: 2, unitPrice: '¥887', totalPrice: '¥1,774', supplier: 'JLCPCB'},
  { name: 'Connector', image: 'images.jpeg', model: 'C19268029', qty: 12, unitPrice: '¥60', totalPrice: '¥720', supplier: 'LCSC'},
  { name: 'Emergency Stop', image: 'estop.jpg', model: 'FB1W-HW1B-V402R-Y0', qty: 1, unitPrice: '¥4,698', totalPrice: '¥4,698', supplier: 'Monotaro'},
];

export default function ElectricalTable() {
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
            <td><ComponentPhoto src={require(`@site/static/img/BOM/electrical/${comp.image}`).default} alt={comp.name} /></td>
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
