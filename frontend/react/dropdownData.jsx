const menuData = [
      { top: true, label: 'SELECT' },
      { top: true, label: 'FROM' },
      { top: true, label: 'WHERE' },
      { top: true, label: 'GROUP BY' },
      { top: true, label: 'ORDER BY' },
      { top: true, label: 'JOIN' },
      { top: true, label: 'HAVING' },
      { top: true, label: 'DISTINCT' },
      { top: true, label: 'LIMIT' },
      { top: true, label: 'INSERT INTO' },
  {
    label: 'Clauses',
    submenu: [
      { label: 'SELECT' },
      { label: 'FROM' },
      { label: 'GROUP BY' },
      { label: 'HAVING' },
      { label: 'ORDER BY' },
      { label: 'LIMIT' },
      { label: 'OFFSET' },
      { label: 'DISTINCT' },
      { label: 'LIKE' },
      { label: 'IN' },
      { label: 'BETWEEN' },
    ]
  },
  {
    label: 'Comparison Operators',
    submenu: [
      { label: '=' },
      { label: '>' },
      { label: '<' },
      { label: '>=' },
      { label: '<=' },
      { label: '!=' },
      { label: '<>' },
    ]
  },
  {
    label: 'Arithmetic Operators',
    submenu: [
      { label: '+' },
      { label: '-' },
      { label: '*' },
      { label: '/' },
      { label: '%' },
    ]
  },
  {
    label: 'Operators',
    submenu: [
      { label: 'AND' },
      { label: 'OR' },
      { label: 'NOT' },
      { label: 'BETWEEN' },
      { label: 'EXISTS' },
      { label: 'IN' },
      { label: 'IS NULL' },
      { label: 'IS NOT NULL' },
      { label: 'LIKE' },
      { label: 'NOT' },
      { label: 'OR' },
    ]
  },
]

export default menuData;