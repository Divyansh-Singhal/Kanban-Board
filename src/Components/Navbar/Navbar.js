import React, {useState} from 'react'


import './Navbar.css'

export default function Navbar(props) {
    const [toggle, settoggle] = useState(false);

    function Grouping(e){
        settoggle(!toggle);
        if(e.target.value !== undefined){
            props.handlegroupVal(e.target.value);
        }
        
    }
    function Priority(e){
        settoggle(!toggle);
        if(e.target.value !== undefined){
            props.handleorderval(e.target.value);
        }
    }
    const toggleDropdown = () => {
        const dropdown = document.getElementById("d-drop");
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
      };
    
    
  return (
    <>
        <section className="navbar">
            <div >
                <div>
                    <div id="ddbtn" className="d-btn" onClick={toggleDropdown}>
                        <div className="d-icon">
                        <span className="material-symbols-outlined">tune</span>
                        </div>
                        <div className="d-head">
                            Display
                        </div>
                        <div className="d-icon">
                        <span className="material-symbols-outlined d-col">expand_more</span>
                        </div>
                    </div>
                    <div id="d-drop" className="d-drop">
                        <div className="drop-filter">
                            <div className="drop-cat">
                                Grouping
                            </div>
                            <div >
                                <select value={props.groupValue} onChange={Grouping} className='d-dropchild' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="drop-filter">
                            <div className="drop-cat">
                                Ordering
                            </div>
                            <div>
                                <select value={props.orderValue} onChange={Priority} className='d-dropchild' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
