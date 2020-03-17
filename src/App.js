import React, { Suspense, lazy } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

// router dom
import { Route } from 'react-router-dom';
//Component
const Home = lazy(() => import('./components/home'));
function App() {
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progress = React.useRef(() => { });
    React.useEffect(() => {
        progress.current = () => {
            if (completed > 100) {
                setCompleted(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setCompleted(completed + diff);
                setBuffer(completed + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        function tick() {
            progress.current();
        }
        const timer = setInterval(tick, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Suspense fallback={<LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />}>
            <Route exact to='/' component={Home} />
        </Suspense >
    );
}

export default App;
