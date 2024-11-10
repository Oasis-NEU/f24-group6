import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react';

const supabase = createClient('https://rusyvkqjhxhzukctrldq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1c3l2a3FqaHhoenVrY3RybGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzIyNDUsImV4cCI6MjA0MzgwODI0NX0.FWjpOA1Gh59NWTv6yuhBU6V__2-DzZgGbf1iyXrCSqk')


function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform sign-in logic here, e.g., API call
        console.log('Username:', username);
        console.log('Password:', password);
    };
    // CHANGE EMAIL TO USERNAME INSTEAD?

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username or Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                {/* Password Input */}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* Submit Button */}
                <button type="submit">Sign In</button>
            </form>

        </div>
    );
}

export default SignIn;



