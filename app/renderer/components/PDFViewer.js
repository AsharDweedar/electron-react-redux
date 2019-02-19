import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

export default class ViewPDF extends Component {
  state = {
    filepath: this.props.filepath,
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoad () {}
  render () {
    const { pageNumber, numPages, filepath } = this.state

    return (
      <div>
        <h2>view PDF</h2>
        <Document file={filepath} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )
  }
}
