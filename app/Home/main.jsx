import React from 'react'
import Banner from './banner_1'
import Work from './work_2'

const main = (prop) => {
    return (
        <div>
            <Banner Title={prop.Title} />
            <Work Title={prop.Title} />
        </div>
    )
}

export default main
