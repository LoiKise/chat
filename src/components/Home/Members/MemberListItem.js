import React, { Fragment } from 'react'
import MemberItem from './MemberItem'

export default function MemberListItem({memberItem}) {
    console.log('memberItem',memberItem)

    const renderMemberItem = () => {
        return memberItem.map((member, index) => {
            return (
                <Fragment key={index}>
                    <MemberItem member={member}/>
                </Fragment>
            )
        })
    }

    return (
        <>
            {renderMemberItem()}
        </>
    )
}

