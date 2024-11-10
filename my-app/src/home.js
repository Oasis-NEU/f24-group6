// Home.js
const Home = () => {
    const [showCaption, setShowCaption] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setShowCaption((prev) => !prev);
        }, 10000); // Toggle every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
            'a',
            { href: 'market.html' },
            React.createElement('button', { className: 'back-button' }, 'To the market')
        ),
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement('img', {
                src: 'kitty.png',
                alt: 'cat',
                className: 'cat-image',
            }),
            React.createElement(
                'div',
                { className: 'caption-container' },
                React.createElement('img', {
                    src: 'caption.png',
                    alt: 'text',
                    className: 'caption-image',
                }),
                showCaption
                    ? React.createElement('p', { className: 'caption-text' }, 'I want a drink')
                    : null
            )
        )
    );
};

// Render the component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(Home), rootElement);
