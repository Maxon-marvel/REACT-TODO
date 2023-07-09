import React from 'react'

const Footer = ({work}) => {
    const year = new Date();
    return (
        <div>
            <footer>
                <p>There are {work.length} {(work.length === 0)?"Events":"Event"} today</p>
                <p>Copyrights &copy; {year.getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer