import React from 'react';
import './rightDiv.css';
import Card1 from './Card1';
import img1 from '../images/delhi-1.jpg';
import img2 from '../images/maldives.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/desert.jpg';

export default function RightDiv() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    const dDay = days[d.getDay()], dDay2 = days[(d.getDay()+1)%7];
    const dDate = d.getDate();
    const dMonth = d.getMonth() + 1;
    return (
        <div className="rightDiv">
            <div className="top-right margin-left">
                <div className="logo">Logo</div>
                <p className="p1">Business</p>
                <p className="p2">New</p>
                <hr className="hr-v" />
                <p className="p3">Trips</p>
                <p className="p4"><span className="material-icons favorite">favorite</span></p>
                <p className="log-out"><span className="material-icons logout">logout</span>Log out</p>
                <div className="lang-selection">
                    <form className="lang-form">
                        <select id="lang" name="lang">
                        <option value="eng">English</option>
                        <option value="bng">Bangla</option>
                        </select>
                    </form>
                </div>
            </div>
            <h2 className="welcome-h2 margin-left">Welcome, Find a flexible flight for your next trip...</h2>
            <div className="drop-down margin-left">
                <div className="form1">
                    <form>
                        <select id="option" name="option">
                        <option value="return">Return</option>
                        <option value="book">Book</option>
                        </select>
                    </form>
                </div>
                <div className="form2">
                <form>
                    <select id="category" name="category">
                    <option value="adult">1 Adult</option>
                    <option value="child">Child</option>
                    </select>
                    </form>
                </div>
                <div className="form3">
                <form>
                    <select id="type" name="type">
                    <option value="economy">Economy</option>
                    </select>
                    </form>
                </div>
            </div>
            <div className="input">
                <div className="inp-div1 margin-left">
                    <button className="inp-btn1">San Fransisco</button>
                    <span className="material-icons">add</span>
                </div>
                <button className="inp-div2">
                <span className="material-icons s-arrow">swap_horiz</span>
                </button>
                <div className="inp-div3">
                    To?
                </div>
                <div className="inp-div4">
                    <span className="material-icons">date_range</span>{dDay} {dDate}/{dMonth.toString().length>1? dMonth : "0" +dMonth}
                </div>
                <div className="inp-div5">
                <span className="material-icons">date_range</span>{dDay2} {dDate+1}/{dMonth.toString().length>1? dMonth : "0" +dMonth}
                </div>
                <button className="inp-div6">
                <span className="material-icons search">search</span>
                </button>
            </div>
            <div className="description">
                <h2 className="countries-h2 margin-left">Countries you can travel to right now</h2>
                <div className="see-all">
                    <div className="pera margin-left">Popular destinations open to visitors from your country</div>
                    <button className="see-all-btn">See all</button>
                </div>
                <div className="clear"></div>
                <div className="cardDiv margin-left">
                    <Card1 status="Open" heading="Delhi Event 2022" desc="A small description here..." footer="• Important" url={img1} />
                    <Card1 status="Restrictions" heading="Top Places to visit in Maldives" desc="A small description here..." footer="• Important" url={img2} />
                    <Card1 status="Covid Travel updates" heading="Option without Description goes here" desc="A small description here..." footer="• 2 mins read" url={img3} />
                    <Card1 status="Open" heading="Delhi Event 2022" desc="A small description here..." footer="• 2 mins read" url={img4} />
                </div>
                <div className="btns">
                    <button className="btn1"><span className="material-icons s-arrow">chevron_left</span></button>
                    <button className="btn2"><span className="material-icons s-arrow">chevron_right</span></button>
                </div>

            </div>

        </div>
    )
}
