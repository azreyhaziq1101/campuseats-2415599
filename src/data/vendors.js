const vendors = [
 {
 id: 'my-restaurant',
 name: 'Kafe Mahallah Zubair',
 location: 'Mahallah Zubair, Block Kafe',
 openHours: '7:00 am - 10:00 pm',
 isOpen: true,
 menu: [
 { id: 'my-1', name: 'Nasi Ayam Bangla', description: 'Murah dan sedap', price: 5.0, category: 'Rice',
available: true },
 { id: 'my-2', name: 'Chicken Wrap Abangku', description: 'Kenyang dan sedap', price: 6, category:
'Wraps', available: true },
 { id: 'my-3', name: 'Shawarma Zubair', description: 'Viva shawarma delicioso', price: 6.0, category:
'Wraps', available: false },
 ],
 },
 {
 id: 'kafe-aminah',
 name: 'Kafe Mahallah Aminah',
 location: 'Mahallah Aminah, Ground Floor',
 openHours: '8:00 am - 9:00 pm',
 isOpen: true,
 menu: [
 { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
 { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price:
3, category: 'Drinks', available: true },
 ],
 },
]
export default vendors