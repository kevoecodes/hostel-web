import { getDocument } from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';
import { useEffect, useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Config } from '../utils/Config';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PdfPreview({ document, title, open = false, handleClose }) {
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        // Load the PDF file and get the number of pages
    }, []);

    return (
        <>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {title}
                        </Typography>
                        <Button color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
                        <Viewer
                            style={{
                                '.pdf-viewer-toolbar-item-download': { display: 'none' },
                                '.react-pdf__Page__textContent': { userSelect: 'none' }
                            }}
                            // fileUrl={url}
                            fileUrl={`${Config.mediaURL}files/${document}`}
                        />
                    </Worker>
                </div>
            </Dialog>
        </>
    );
}

export default PdfPreview;
