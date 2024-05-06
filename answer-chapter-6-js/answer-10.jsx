import React, { useEffect, useState } from 'react';

function App(props) {
    const [name, setName] = useState('');
    useEffect(() => console.log('Always rendered.'), []);

    return <input type='text' value={name} onChange={(e) => setName(e.target.value)} />;
}