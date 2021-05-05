import React, { Fragment, Suspense } from 'react';
import ErrorBond from './ErrPage';

export default class Hoc extends React.Component {
    render() {
        return (
            <Fragment>
                <Suspense fallback={<h1>Wait...</h1>}>
                    <ErrorBond>
                        <Data detail={Info} />
                    </ErrorBond>
                </Suspense>
            </Fragment>
        )
    }
}
class Info extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Details of Data Component</h1>
            </Fragment>
        )
    }
}

class Data extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={}
    }
    
    render() {
        const key=this.state.detail;
        return (
            
            <div>
                <h1 style={{ color: "red" }}>Using High Order Component</h1>
                <h1><this.props.detail /></h1>
            </div>
        )
    }
}