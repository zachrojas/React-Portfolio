import React from 'react';

function Navigation ({ currentPage, handlePageChange }) {
    return (
        <nav id="contact">
            <ul>
              <li>
                  <a href="#About">About</a>
                </li>
              <li>
                  <a href="#Portfolio">Portfolio</a>
                </li>
              <li>
                  <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation