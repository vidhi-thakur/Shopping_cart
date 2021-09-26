import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <section>
                <section className="titleAndReviwes">
                    <h1>Sbarro - New York Pizza</h1>
                    <section>
                        <span>Ratings 1</span>
                        <span>Ratings 2</span>
                    </section>
                </section>
                <p>Pizza, Fast Food</p>
                <p>Thaltej, Ahmedabad</p>
                <p>11am – 8:30pm (Today) <small className="infoIcon">i</small></p>
            </section>
        </header>
    )
}

export default Header
