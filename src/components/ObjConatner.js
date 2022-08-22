import Obj_file from '../components/React_obj'
import React from 'react';
class Container extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
                {isMounted && <Obj_file onProgress={loadingPercentage => this.setState({ loadingPercentage })} link="/eleph.obj"/>}
                {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
                {isMounted && loadingPercentage !== 100 && <div className='gradient'>Loading Model: {loadingPercentage}%</div>}
            </>
        )
    }
}
export default Container;