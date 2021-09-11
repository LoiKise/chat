import React from 'react'

export default function MemberItem({member}) {
    return (
        <div className="col-md-3">
            <div className="ourmember-item">
                <img src={member.avtar} alt="" className="ourmember-img" />
                <div className="ourmember-infor">
                    <h3 className="ourmember-infor__membername">
                        {member.name}
                    </h3>
                    <h5 className="ourmember-infor__memberposition">
                        {member.position}
                    </h5>
                </div>
            </div>
        </div>
    )
}
