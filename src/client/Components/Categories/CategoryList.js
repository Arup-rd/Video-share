import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryList = ({ category, ...props }) => (
  <div className="categories-list">
    <div className="content-sidebar">
      <h4><img src="/images/fi.png" alt="" />Categories</h4>
      <ul>
        {console.log('cat', category)}
        {category.map(cat => {
          return (
            <li key={cat._id}>
              <NavLink onClick={() => this.props.className = 'active'} 
                to={`/category?id=${cat._id}`}
                style={{cursor: 'pointer'}}
                onClick={(e) => props.filter(cat._id)}
                activeClassName="active"
              >
              {cat.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default CategoryList
