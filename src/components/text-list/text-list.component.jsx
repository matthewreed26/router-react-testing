import React from 'react';
import { TextSection } from '../text-section/text-section.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const TextList = ({ texts, history }) => {
    return <div>
        <button onClick={() => console.log(history)}>Log History from Sub Component</button>
        <div>
            {texts.map(pageText => <TextSection key={pageText.id} text={pageText}></TextSection>)}
        </div>
    </div>;
};

const mapStateToProps = state => ({
    texts: state.text.texts
})

export default connect(mapStateToProps)(withRouter(TextList));