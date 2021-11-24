import React from 'react'
import './styles.css'


export default function Footer(props) {
    return (
        <div className="container">
            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p style={{color: props.mode === 'dark' ? 'white' : 'black' }}>© TextUtils, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="link-dark" target="_blank" href="https://github.com/ItachiUchiha5277/textutils">
                        <button className={`discord-btn btn btn-${props.mode==='dark'?'light':'dark'}`}>
                            <i className="fab fa-github"></i>
                        </button>
                        </a>
                    </li>

                    <li className="ms-3">
                        <button className={`discord-btn btn btn-${props.mode==='dark'?'light':'dark'}`}>
                            <i className="fab fa-discord"></i>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    )
}