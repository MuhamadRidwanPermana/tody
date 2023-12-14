import { useState } from "react";
import iconSun from '/sun.svg';

import NavbarCategories from "../components/NavbarCategories";

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

const categoryItems = [
  {
    id: 1,
    name: 'UTS',
    checked: true,
  },
  {
    id: 2,
    name: 'UAS',
    checked: false,
  },
  {
    id: 3,
    name: 'Praktikum',
    checked: false,
  },
];


export default function Category(){
  const [items, setItems] = useState(categoryItems);

  function handleAddItem(item){
    setItems([...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked:!item.checked} : item)));
  }

  const totalItems = items.length;
  
  return(
    <div className="app">
      <NavbarCategories />
      
      <div className="row pt-5 mt-3 px-3">
        <div className="col-2 px-4 py-3">
          <img src={iconSun} className="icon" alt="" />
        </div>
        <div className="col-5 px-4 mx-2 py-3 mt-1">
          <h1 className="text-dark fw-semibold p-0 m-0">Today</h1>
          <span className="text-secondary">{totalItems} Task</span>
        </div>
      </div>

      <CategoriesBody items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <FormCategory onAddItem={handleAddItem}/>
    </div>
  );
}


function CategoriesBody({items, onDeleteItem, onToggleItem}){
  return (
    <div className="list px-2 d-flex">
      <ul>
        {items.map((item) => ( 
          <ItemCategory item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>
    </div>
  )
}


function FormCategory({onAddItem}){
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    if(!name) return;

    const newItem = { name, checked:false, id:Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
  }

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  return(
    <>
      <form className="add-form" onSubmit={handleSubmit}>

        <button onClick={toggleShow} className="btn-add btn btn-success btn-lg rounded-5 fixed-bottom">
          <i class="bi bi-plus-lg text-white"></i>
        </button>

        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add your Todo</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <input type="text" className='form-control form-control form-control-lg' value={name} onChange={(e) => setName(e.target.value)}/>
              </MDBModalBody>
              <MDBModalFooter>
                <button className='btn btn-md btn-danger rounded-5' onClick={toggleShow}>Cancel</button>
                <button className='btn btn-md btn-success rounded-5 px-4' onClick={toggleShow}>Add</button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </form>
    </>
  )
}


function ItemCategory({item, onDeleteItem, onToggleItem}){
  return(
    <li key={item.id}>
      <button className='btn-ckeckbox'>
        <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)}/>
      </button>
      <div className="list-name p-2">
        <h5 style={ item.checked ? { textDecoration: 'line-through', color:'#ddd' } : {} }>{item.name}</h5>
      </div>
      <button className="btn-delete btn btn-lg" onClick={() => onDeleteItem(item.id)}>
        <i class="bi bi-x-circle text-secondary"></i>
      </button>
    </li>
  );
}