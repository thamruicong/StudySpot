import {Box, Typography} from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import Avatar from '@mui/material/Avatar';
import {tableState} from "../pages/Map";

const style = {
    position : 'absolute' as 'absolute',
    top : '50%',
    left : '50%',
    transform : 'translate(-50%, -50%)',
    width : 800,
    height: 350,
    bgcolor : 'white',
    border : '2px solid #000',
    boxShadow : 24,
    p : 4,
    borderRadius: 8
};

interface TableModalProps {
    isOpen: boolean,
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
    selectedTable: tableState
}

export const TableModal = ({isOpen, setIsOpen, selectedTable} : TableModalProps) => {
    return (
        //got 4 fields 
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={ style }>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    {selectedTable.tableNumber}
                </Typography>
                <Typography id="modal-modal-description" sx={ { mt : 2 } }>
                    {selectedTable.seats}
                </Typography>
                <Typography>1300</Typography>
            </Box>
        </Modal>
    )

}