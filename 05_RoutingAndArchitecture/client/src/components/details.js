import React from 'react'

const Details = ({match}) => (
    <h1>Some details about {match.params.id}</h1>
)

export default Details