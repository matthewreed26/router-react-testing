import React from 'react';
import { TextSection } from '../text-section/text-section.component';

export const TextList = props => {
    return props.texts.map(pageText => <TextSection key={pageText.id} text={pageText}></TextSection>);
};