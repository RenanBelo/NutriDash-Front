import React, { useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function GenreRadioButton() {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '1',
            label: 'Feminino',
            value: 'Feminino'
        },
        {
            id: '2',
            label: 'Masculino',
            value: 'Masculino'
        },
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            layout='row'
        />
    );

}
