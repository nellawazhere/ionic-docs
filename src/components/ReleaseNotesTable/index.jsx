import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';

export default function ReleaseNotesTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = Object.values(item).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesType = !typeFilter || item.type === typeFilter;
      const matchesCategory = !categoryFilter || item.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [data, searchTerm, typeFilter, categoryFilter]);

  const types = [...new Set(data.map(item => item.type))].sort();
  const categories = [...new Set(data.map(item => item.category))].sort();

  const getTypeBadgeClass = (type) => {
    return `${styles.typeBadge} ${type === 'Fixed' ? styles.typeFixed : styles.typeNew}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search release notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
          aria-label="Search release notes"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className={styles.select}
          aria-label="Filter by type"
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={styles.select}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.typeColumn}>Type</th>
              <th className={styles.categoryColumn}>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className={styles.typeColumn}>
                  <span className={getTypeBadgeClass(item.type)}>
                    {item.type}
                  </span>
                </td>
                <td className={styles.categoryColumn}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                </td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}