// $ npm install react && npm install @types/react
import * as React from 'react'

type PropTypes = {
    id: string
}

type StateTypes = {
    id: number
}

class MyView extends React.Component<PropTypes, StateTypes> {

}

<MyView id={'hi'} />