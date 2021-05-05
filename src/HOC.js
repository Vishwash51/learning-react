import React, { Fragment, Suspense } from 'react';
import ErrorBond from './ErrPage';

export default class Hoc extends React.Component {
    render() {
        return (
            <Fragment>
                <Suspense fallback={<h1>Wait...</h1>}>
                    <ErrorBond>
                        <Data detail="Info" />
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
                <p>Details of </p>
            </Fragment>
        )
    }
}
class Data extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Using High Order Component</h1>
                {this.props.detail}
            </div>
        )
    }
}