import React from 'react'
import Banner from './banner_1'
import Work from './work_2'
import Web_apart_3 from './Web_apart_3'
import Integration_4 from './integration_4'
import Trust_5 from './Trust_5'

const main = (prop) => {
    return (
        <div>
            <Banner Title={prop.Title} />
            <Work Title={prop.Title} />
            <Web_apart_3 Title={prop.Title} />
            <Integration_4 />
            <Trust_5 Title={prop.Title} />
        </div>
    )
}

export default main
