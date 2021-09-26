import "./styles/footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="containerfoot">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Popular searches</h4>
                            <ul>
                                <li>New Styles</li>
                                <li>Nike Airforce</li>
                                <li>Nike Barnd</li>
                                <li>Nike Blues</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Popular Categories</h4>
                            <ul>
                                <li>Sneakers</li>
                                <li>Stylish Sneakers</li>
                                <li>Lofers</li>
                                <li>Joggers</li>
                                <li>Party wear</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Trending Searches</h4>
                            <ul>
                                <li>Nike Air Space</li>
                                <li>Nike Women</li>
                                <li>Joggers</li>
                                <li>New Releases</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;