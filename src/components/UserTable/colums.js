export const columns = [
  {
    title: 'Token ID',
    dataIndex: 'uid',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.uid - b.uid,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    defaultSortOrder: 'descend',
  },
  {
    title: 'Block Hash',
    dataIndex: 'block_hash',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.block_hash.length - b.block_hash.length,
  },
  {
    title: 'Block Number',
    dataIndex: 'block_number',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a - b,
  },
  {
    title: 'Block Timestamp',
    dataIndex: 'block_timestamp',
  },
  {
    title: 'Transaction Hash',
    dataIndex: 'transaction_hash',
  },

  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Street Address',
    dataIndex: 'streetAddress',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Province',
    dataIndex: 'province',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Postal Code',
    dataIndex: 'postalCode',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Clothing Size',
    dataIndex: 'clothingSize',
  }
];