import './style.css';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages })
    }

    handlePageTurn = () => {
        let pageDirection
        if (this.state.pageNumber === 1) {
            pageDirection = 2
        } else {
            pageDirection = 1
        }
        this.setState({ pageNumber: pageDirection })
    }

    render() {
        const { pageNumber, numPages } = this.state
        const pdfPath = '/images/patrickkennedyresumev2.pdf'

        return(
        <div>
            <h1 className="title"><b>Resume</b></h1>
            <h5 className="title"><a style={{textDecoration: 'none'}} href="/images/patrickkennedyresumev2.pdf" download><i className="fas fa-download"></i> Download</a></h5>
            <br />
            <div style={{textAlign: 'center'}} >
                <a href={pdfPath} rel="noopener noreferrer" target="_blank" className="waves-effect waves-light btn  blue darken-1">Open PDF In A New Tab</a>
            </div>
            <div id='pdfViewer'>
            <Document
                style={{wdith: '100%'}}
                file={pdfPath}
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <br /><br /><br />
                <Page pageNumber={pageNumber} width={this.props.wrapperDivSize}/>
                <div style={{textAlign: 'center'}}>
                <button onClick={this.handlePageTurn} class="waves-effect waves-light btn  blue darken-1">{pageNumber === 1 ? 'Next Page' : 'Previous Page'}</button>
                <p style={{textAlign: 'center'}} >Page {pageNumber} of {numPages}</p>
                </div>
            </Document>
            </div>
        </div>
        )
    }
}

export default Resume;