import React from 'react';
import './NesDialog.scss';


interface IProps {
    id: string;
}
const NesDialog: React.FC<IProps> = ({children, id}) => {
    return (
        <dialog className="nes-dialog" id={id}>
            {children}
        </dialog>
    );
};

export default NesDialog;

