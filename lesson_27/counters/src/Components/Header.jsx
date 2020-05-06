import React from 'react';

const Header = props => {
    const { lesson = ''} = props;
    return(
        <h1>My counters ({lesson})</h1>
    )
}

export default Header;