import PropTypes from "prop-types";
import "./PageTitle.css"

function PageTitle({title}){
    PageTitle.propTypes = {
        title: PropTypes.string.isRequired
    };

    return (
        <div className="page-title">
            <div className="container-fluid page-header py-5">
                <div className="text-center display-6 cart-text">{title}</div>
            </div>
        </div>
    )
}

export default PageTitle