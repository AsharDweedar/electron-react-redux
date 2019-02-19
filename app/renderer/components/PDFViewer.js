import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

export default class viewPDF extends Component {
  state = {
    path: this.props.filePath,
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoad () {}
  render () {
    const { pageNumber, numPages, path } = this.state

    return (
      <div>
        <h2>view PDF</h2>
        <Document file={path} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )
  }
}
