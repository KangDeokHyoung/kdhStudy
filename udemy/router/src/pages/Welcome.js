import React from 'react';
import { Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <h1>The Welcom Page</h1>
            <Route path="/welcome/newuser">
                <p>welcom, new user</p>
            </Route>
        </section>
    );
};

export default Welcome;