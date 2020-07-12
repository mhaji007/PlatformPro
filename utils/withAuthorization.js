import {Component} from 'react';

const withAuthorization = (WrappedComponent) => {
    return class extends Component {
        static async getInitialProps(context) {
            const componentProps = WrappedComponent.getInitialProps &&
                (await WrappedComponent.getInitialProps(context));

            return {...componentProps};
        }
        render () {
            return <WrappedComponent {...this.props}/>
        }
    }

}

export {withAuthorization};