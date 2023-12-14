import iconSun from '/sun.svg';
import iconCircle from '/circle.svg';

import { Link } from 'react-router-dom';

export default function NavbarCategories(){
    return(
        <>
            <div className="navbar">
                <div className="container px-5 py-0">
                    <div className="col-6 mt-4 mb-4">
                        <Link to="/">
                            <i class="bi bi-arrow-left fs-1"></i>
                        </Link>
                    </div>
                    <div className="col-6 mt-4 mb-4 pt-1 text-end">
                        <h2 className="text-dark fw-semibold"><i className="bi bi-three-dots-vertical"></i></h2>
                    </div>
                </div>

                <img src={iconCircle} class="circle" alt=""></img>

            </div>
        </>
    )
}