import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <>
        <div className="card">
            <div className="card-top">
                <div className="card-id">{props.cardDetails.id}</div>
                
                    <div className="card-img">
                      <img className='card-image' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"></img>
                    </div>
              
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><span class="material-symbols-outlined">unknown_med</span></div>,
                        1: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt_1_bar</span></div>,
                        2: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt_2_bar</span></div>,
                        3: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt</span></div>,
                        4: <div className="card-tag-icon"><span class="material-symbols-outlined urgent">priority_high</span></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
