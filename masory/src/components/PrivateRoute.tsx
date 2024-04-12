/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from 'react-router-dom';
import { UserContext } from './AuthContext';
import { Fragment, useContext } from 'react';

export const Private = ({ Component }: any) => {

    const { user } = useContext(UserContext);

    if (!user) return <Navigate to="/login" />

    return (
        <Fragment>
            <Component />
        </Fragment>
    )

}