


function Header() {
    return (
        <div>
        <header className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                    <img src="img/logo.png" class="img-fluid" />
                </div>
                <div className="col">
                    <h1>Community Hospice</h1>
                    <h2>Local Folks, Local Care</h2>
                </div>
                <div className="col col-md-4 col-xl-2 mt-4">
                    <a href="#reserveForm" role="button" className="btn btn-lg btn-info" data-toggle="modal"
                        data-placement="bottom" data-html="true" data-target= "#reserveModal"
                        title="Or call us at <br /><strong>1-206-555-1234</strong>">Refer a Patient</a>
                </div>
            </div>
        </div>
    </header>
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
            <a className="navbar-brand" href="#"><img src="img/logo.png" height="30" width="30" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nucampNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nucampNavbar"></div>
            <ul className="navbar-nav">
                <li className="nav-item active"><a className="nav-link" href="index.html"><i className="fa fa-home fa-lg"></i> Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-info fa-lg"></i> About</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-list fa-lg"></i> Sites</a></li>
                <li className="nav-item"><a className="nav-link" href="contactus.html"><i class="fa fa-address-card fa-lg"></i>Contact</a></li>
            </ul>
        </div>
    </nav>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">About</li>
                </ol>
               <h2>About Us</h2>
               <hr />
            </div>
        </div>
    </div>
    </div>
    )
};




export default Header;