import iconSun from '/sun.svg';
import iconCalendar from '/calendar.svg';
import iconBag from '/bag.svg';
import iconPeople from '/people.svg';
import iconShopping from '/shopping.svg';
import iconMen from '/men.svg';
import iconCircle from '/circle.svg';

import { Link } from 'react-router-dom';
import { useState } from "react";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const categoriesItems = [
  {
    id: 1,
    img: iconSun,
    name: 'Today',
  },
  {
    id: 2,
    img: iconCalendar,
    name: 'Planned',
  },
  {
    id: 3,
    img: iconBag,
    name: 'Work',
  },
  {
    id: 4,
    img: iconPeople,
    name: 'Personal',
  },
  {
    id: 5,
    img: iconShopping,
    name: 'Shopping',
  },
];


export default function Categories(){
  const [itemsCategories, setItemsCategories] = useState(categoriesItems);

  function handleAddItemCategories(itemCategory){
    setItemsCategories([...itemsCategories, itemCategory]);
  }
  function handleDeleteItemCategories(id){
    setItemsCategories((itemsCategories) => itemsCategories.filter((itemCategory) => itemCategory.id !== id));
  }

  const totalItemsCategories = itemsCategories.length;

  return(
    <div>
      <div class="container-fluid mt-3 mb-3 px-5 d-flex">
        <div class="col-10 pt-2">
          <h2 class="fw-semibold">Hallo Ridwan</h2>
          <span>Today you have {totalItemsCategories} Task</span>
        </div>
        <div class="col-2">
          <img src={iconMen} class="icon icon-men" alt="" />
        </div>
      </div>

      <img src={iconCircle} class="circle" alt=""></img>

      <Form onAddItemCategories={handleAddItemCategories}/>
      <Category itemsCategories={itemsCategories} onDeleteItemCategories={handleDeleteItemCategories}/>

    </div>
  );
}


function Category({itemsCategories, onDeleteItemCategories}){
  return(
    <>
      {itemsCategories.map((itemCategory) => ( 
      <Item itemCategory={itemCategory} key={itemCategory.id} onDeleteItemCategories={onDeleteItemCategories}/>
      ))}
    </>
  )
}


function Form({onAddItemCategories, itemCategory}){
  const [name, setName] = useState('');
  // const [icon, setIcon] = useState('');
  const [chooseIcon, setChooseIcon] = useState('');

  function handleSubmitCategories(e){
    e.preventDefault();

    if(!name) return;

    const newItem = { name, img, id:Date.now() };
    onAddItemCategories(newItem);

    console.log(newItem);

    setName('');
    // setChooseIcon('');
  }
    
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  
  // let iconSelect;

  // switch (chooseIcon){
  //   case 'iconSun':
  //     iconSelect = itemCategory.iconSun;
  //     break;
  //   case 'iconCalendar':
  //     iconSelect = itemCategory.push(iconCalendar);
  //     break;
  //   case 'iconPeople':
  //     iconSelect = iconPeople;
  //     break;
  //   case 'iconShopping':
  //     iconSelect = iconShopping;
  //     break;
  //   default:
  //     iconSelect = iconBag;
  //     break;
  // }

  return(
    <>
      <form className="add-form" onSubmit={handleSubmitCategories}>

        <button onClick={toggleShow} className="btn-add btn-success btn btn-lg rounded-5 fixed-bottom">
          <i class="bi bi-plus-lg text-white"></i>
        </button>

        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                {/* <MDBModalTitle>Add Category</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
              </MDBModalHeader>
              <MDBModalBody>
                {/* <div className="select-icon">
                  <h5 className="mb-4">Select your icon</h5>
                  <div className="icons">
                    <img src={iconSun} alt="" />
                    <img src={iconCalendar} alt="" />
                    <img src={iconPeople} alt="" />
                    <img src={iconShopping} alt="" />
                    <img src={iconSun} alt="" />
                    <img src={iconCalendar} alt="" />
                    <img src={iconPeople} alt="" />
                    <img src={iconShopping} alt="" />
                  </div>
                </div> */}
                {/* <select id="icon" className="form-select">
                    <option value="iconSun"><img src={iconSun} alt="" /></option>
                    <option value="iconCalendar"><img src={iconCalendar} alt="" /></option>
                    <option value="iconPeople"><img src={iconPeople} alt="" /></option>
                    <option value="iconShopping"><img src={iconShopping} alt="" /></option>
                </select> */}
                {/* <select id="icon" className="form-select form-select-md mb-3" value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}>
                  <option value="iconSun">Icon Sun</option>
                  <option value="iconCalendar">Icon Calendar</option>
                  <option value="iconPeople">People</option>
                  <option value="iconShopping">Shopping</option>
                </select> */}
                <div className='select-icon'>
                  <h5 className="mb-4">Select your icon</h5>
                  <input type="image" src={iconSun} alt="" className='icon form-control form-control form-control-sm' value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}/>
                  <input type="image" src={iconCalendar} alt="" className='icon form-control form-control form-control-sm' value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}/>
                  <input type="image" src={iconBag} alt="" className='icon form-control form-control form-control-sm' value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}/>
                  <input type="image" src={iconPeople} alt="" className='icon form-control form-control form-control-sm' value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}/>
                  <input type="image" src={iconShopping} alt="" className='icon form-control form-control form-control-lg' value={chooseIcon} onChange={(e) => setChooseIcon(e.target.value)}/>
                </div>

                <input type="text" className='form-control form-control form-control-lg' value={name} onChange={(e) => setName(e.target.value)}/>
              </MDBModalBody>
              <MDBModalFooter>
                {/* <button className='btn btn-md btn-danger rounded-5' onClick={toggleShow}>Cancel</button> */}
                <button className='btn btn-md btn-success rounded-5 px-4 mt-0' onClick={toggleShow}>Add Category</button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </form>
    </>
  )
}


function Item({itemCategory, onDeleteItemCategories}){
  return(
    <>
      <div className="categories today bg-light rounded-4">
        <div className="row">
          <div className="col-10">
            <Link to="category">
              <div className="row">
              <div className="col-2 px-4 py-3">
                {/* <img src={item.img} className="icon" alt="" /> */}
                <img src={itemCategory.img} className="icon" alt="" />
              </div>
              <div className="col-10 px-5 py-3 mt-1">
                <h1 className="text-dark fw-semibold p-0 m-0">{itemCategory.name}</h1>
                <span className="text-secondary">4 Task</span>
              </div>
              </div>
            </Link>
          </div>
          <div className="col-2 text-end py-2 dropdown">
            <button className="btn btn-lg mx-2 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item">Edit</button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => onDeleteItemCategories(itemCategory.id)}>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}