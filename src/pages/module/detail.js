import React from 'react';

class ModuleDetailPage extends React.Component {
    state = { width: document.getElementsByTagName('main')[0].offsetWidth, height: document.getElementsByTagName('main')[0].offsetHeight };

    render() {
        return <span>App content size: {this.state.width} x {this.state.height}</span>;
    }

    updateDimensions = () => {
        this.setState({ width: document.getElementsByTagName('main')[0].offsetWidth, height: document.getElementsByTagName('main')[0].offsetHeight });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
}

export default ModuleDetailPage;