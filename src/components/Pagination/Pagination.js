import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ projectsPerPage, totalProjects, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item text-danger' >
                        <Link to={`/Portfolio/page/${number}`} className='page-link' onClick={() => paginate(number)}>
                            <span style={{ color: '#787878' }}>{number}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
