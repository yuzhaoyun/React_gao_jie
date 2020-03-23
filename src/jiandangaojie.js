import  React from 'react'

class MyComponent extends React.Component {
    render () {
        return <p>helle React {this.props.msg}</p>
    }
}

const HocComponent = (WrappedComponent) => {
    return class extends React.Component {
        render () {
            return <WrappedComponent {...this.props}/>
        }
    }
}

const NewComponent = HocComponent(MyComponent);

class NewCom extends React.Component {
    render () {
        return <NewComponent msg = "world"></NewComponent>
    }
}

export default NewCom;