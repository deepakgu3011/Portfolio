import React from 'react';

function PDFViewer() {
    return (
        <div className="container mt-3">
            <iframe
                src={`${process.env.PUBLIC_URL}/Deepak_resume.pdf#toolbar=0`}
                width="100%"
                height="600px"
                title="PDF Viewer"
                style={{ border: 'none' }}
            ></iframe>
            <div className="text-center mt-3">
                <a href={`${process.env.PUBLIC_URL}/Deepak_resume.pdf`} className="btn btn-primary" download>
                    Download Resume
                </a>
        </div>
        </div>
    );
}

export default PDFViewer;
