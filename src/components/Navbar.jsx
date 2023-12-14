import iconHamburger from '/hamburger-menu.svg';

export default function Navbar(){
  return (
    <nav className="navbar px-4 pt-4 mx-3">
      <div className="container dropdown">
        <button className="navbar-toggler p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={iconHamburger} alt=""/>
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" href="#">Edit</button>
          </li>
          <li>
            <button class="dropdown-item" onClick={() => onDeleteItem(item.id)}>Delete</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}