import React from 'react'

const MainBoardLists = props => {
    if (props.MboardItems === 0) {
        return (
            <div className="NoMboardMembers">
                <h1>No Main Board Members</h1>
            </div>
        )
    }
    return <div className="member-container2">
        <h2 id='member_title' >Members</h2>

        {props.MboardItems.map(mainMem => (
            <div key={mainMem.id}>
                <div className='cardDiv'>
                    <div className="cardImg">
                        <img src={mainMem.image} id='member_photo' alt="" />

                    </div>
                    <div className="IncardDiv">
                        <div className="infoDiv">
                            <p id='name'>  {mainMem.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {mainMem.name}</h3></p>
                            <h4>Persuing :{mainMem.course}</h4>
                            <p>selected for</p>
                            <h5>{mainMem.selectYear}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
}

export default MainBoardLists